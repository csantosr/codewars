#!/opt/homebrew/bin/bash

ID=$1
LANGUAGES=${2:-"ts"}  # Set default languages to "ts" if none provided

RESPONSE=$(curl -s "https://www.codewars.com/api/v1/code-challenges/$ID")

ID_VALUE=$(echo "$RESPONSE" | jq -r '.id')
NAME_VALUE=$(echo "$RESPONSE" | jq -r '.name')
DESCRIPTION_VALUE="$(echo "$RESPONSE" | jq -r '.description')"
RANK_NAME=$(echo "$RESPONSE" | jq -r '.rank.name')
CREATED_BY_USERNAME=$(echo "$RESPONSE" | jq -r '.createdBy.username')
CREATED_BY_URL=$(echo "$RESPONSE" | jq -r '.createdBy.url')

[ -d "$RANK_NAME" ] || mkdir "$RANK_NAME"
[ -d "$RANK_NAME/$NAME_VALUE" ] || mkdir "$RANK_NAME/$NAME_VALUE"

echo "# [$NAME_VALUE](https://www.codewars.com/kata/$ID_VALUE)" > "$RANK_NAME/$NAME_VALUE/README.md"
echo "## By [$CREATED_BY_USERNAME]($CREATED_BY_URL)" >> "$RANK_NAME/$NAME_VALUE/README.md"
echo "![badge](https://www.codewars.com/users/csantosr/badges/small)" >> "$RANK_NAME/$NAME_VALUE/README.md"
echo "<hr/>" >> "$RANK_NAME/$NAME_VALUE/README.md"
echo "$DESCRIPTION_VALUE" >> "$RANK_NAME/$NAME_VALUE/README.md"

IFS=',' read -ra LANGS <<< "$LANGUAGES"
for LANG in "${LANGS[@]}"; do
    touch "$RANK_NAME/$NAME_VALUE/index.$LANG"
done

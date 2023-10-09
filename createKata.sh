#!/bin/bash


# Check if ID is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <KATA_ID>"
    exit 1
fi

KATA_ID="$1"
URL="https://www.codewars.com/kata/$KATA_ID"

# Fetch the title from the web page
TITLE=$(wget -qO- "$URL" | pup 'title text{}' | sed -n 's/^\(.*\) | Codewars$/\1/p')

# Replace spaces in title with underscores for directory name
DIR_NAME=$(echo $TITLE)

# Create a directory with the title name
mkdir "$DIR_NAME"

# Create a README.md inside the directory with the title and link
echo -e "# [$TITLE]($URL)\n\n![badge](https://www.codewars.com/users/csantosr/badges/small)" > "$DIR_NAME/README.md"
touch "$DIR_NAME/index.ts"

echo "Kata '$DIR_NAME' created with README.md inside."

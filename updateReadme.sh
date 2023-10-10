#!/opt/homebrew/bin/bash

MAIN_README="./README.md"

declare -A LANGUAGES
LANGUAGES=( 
    ["ts"]="https://raw.githubusercontent.com/abrudz/logos/main/TypeScript.svg" 
    ["js"]="https://raw.githubusercontent.com/abrudz/logos/main/JS.svg" 
    # Add more languages in the future like:
    # ["py"]="./path_to_py_logo.png"
)

cat > "$MAIN_README" <<EOL
# My Codewars solutions
Sharing the response to every kata I did on [Codewars](https://www.codewars.com/)

![badge](https://www.codewars.com/users/csantosr/badges/large)

## Solutions
EOL

for dir in */ ; do
    if [ -f "$dir/README.md" ]; then
        # Extract title and link using awk
        TITLE=$(awk -F '[][]' '/^# / { print $2 }' "$dir/README.md")
        LINK=$(awk -F '[][]' '/^# / { print $3 }' "$dir/README.md")

        LINE="- [$TITLE]($LINK)"
        echo $LINE

        for ext in "${!LANGUAGES[@]}"; do
            if [ -f "$dir/index.$ext" ]; then
                LINE="$LINE [<img src="${LANGUAGES[$ext]}" width="15"/>](codewars/tree/master/${dir}index.$ext)"
            fi
        done

        echo "$LINE" >> "$MAIN_README"
    fi
done

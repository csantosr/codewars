#!/opt/homebrew/bin/bash

MAIN_README="./README.md"

declare -A LANGUAGES
LANGUAGES=( 
    ["ts"]="https://raw.githubusercontent.com/abrudz/logos/main/TypeScript.svg" 
    ["js"]="https://raw.githubusercontent.com/abrudz/logos/main/JS.svg" 
    ["swift"]="https://raw.githubusercontent.com/abrudz/logos/main/Swift.svg" 
)

cat > "$MAIN_README" <<EOL
# My Codewars solutions
Sharing the response to every kata I did on [Codewars](https://www.codewars.com/)

![badge](https://www.codewars.com/users/csantosr/badges/large)

## Solutions
EOL

# Iterate over level directories
for level in */ ; do
    # Print the level as a header
    echo "### ${level%/}" >> "$MAIN_README"
    
    # Iterate over exercise directories inside the level
    for dir in "$level"*/ ; do
        if [ -f "$dir/README.md" ]; then
            # Extract title and link using awk
            TITLE=$(awk -F '[][]' '/^# / { print $2 }' "$dir/README.md")
            LINK=$(awk -F '[][]' '/^# / { print $3 }' "$dir/README.md")

            LINE="- $TITLE [Problem]$LINK"

            for ext in "${!LANGUAGES[@]}"; do
                if [ -f "$dir/index.$ext" ]; then
                    LINE="$LINE <a href=\"${dir}index.$ext\"><img src="${LANGUAGES[$ext]}" width="15"/></a>"
                fi
            done

            echo "$LINE" >> "$MAIN_README"
        fi
    done
done

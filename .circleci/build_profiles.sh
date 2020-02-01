#!/bin/bash

set -e

SHA=`git rev-parse --short --verify HEAD`

git config user.name "$COMMIT_AUTHOR"
git config user.email "$COMMIT_AUTHOR_EMAIL"
git checkout origin/master

echo "# Automatic build" > README.md
# echo "Built website from \`$SHA\`. See https://github.com/ethereum/remix-ide/ for details." >> README.md
# echo "To use an offline copy, download \`remix-$SHA.zip\`." >> README.md

node ./.circleci/dist/index.js

git add build/profile_test.json
git commit -m "Built profiles from {$SHA}."

git push -f git@github.com:ethereum/remix-plugins-directory.git master

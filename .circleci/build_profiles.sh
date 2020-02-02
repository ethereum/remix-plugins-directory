#!/bin/bash

set -e

SHA=`git rev-parse --short --verify HEAD`

git config user.name "$COMMIT_AUTHOR"
git config user.email "$COMMIT_AUTHOR_EMAIL"

node ./.circleci/dist/index.js

# if [ "${CIRCLE_BRANCH}" == "master" ]; then
#    git add ./build/metadata.json
#    git commit -m "Built profiles from {$SHA}." --allow-empty
#    git push origin master
# fi

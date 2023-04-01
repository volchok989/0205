#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "Create deploy"
git push -f https://github.com/volchok989/0205.git main:gh-pages

cd -

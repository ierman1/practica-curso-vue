#!/usr/bin/env sh

npm run build

git add dist
git commit -m "deploy"
git subtree push --prefix dist origin deploy
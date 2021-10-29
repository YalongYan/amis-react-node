#!/usr/bin/env bash
rm -rf dist
mkdir dist
npm run umiBuild
cp ./favicon.ico dist/
mv dist/igp/index.html server/views/index.html

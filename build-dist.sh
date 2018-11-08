#!/bin/bash
echo "> Installing packages... "
npm install
echo "> ...Done!"
echo "> Cleaning previous build... "
rm -rf ./dist
echo "> ...Done!"

npm run build

mkdir dist
cp -r ./.next ./dist
cp ./server.js ./dist
cp ./server-package.json ./dist/package.json

echo "Finished! "

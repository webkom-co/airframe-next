#!/bin/bash
echo "> Installing packages... "
npm install
echo "> ...Done!"
echo "> Cleaning previous build... "
rm -rf ./dist
echo "> ...Done!"

npm run build

mkdir -p dist/.next
cp -r ./.next ./dist
cp -r ./static ./dist
cp ./server.js ./dist
cp ./package.json ./dist
cp ./.npmrc ./dist

echo "Finished! "

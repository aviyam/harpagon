#!/usr/bin/bash


trap _cleanup SIGTERM EXIT

_cleanup() {
 rm -rf build
}

mkdir ./build
find . -not -name '.*' -type f -maxdepth 1 -exec cp -v {} ./build/ \;
rm build/build.sh
version=$(cat manifest.json | jq -r .version)
zip harpagon_$version.zip build  






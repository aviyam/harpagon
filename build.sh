#!/bin/bash - 
#===============================================================================
#
#          FILE: build.sh
# 
#         USAGE: ./build.sh 
#        AUTHOR: Aviyam Fischer (), 
#       CREATED: 03/12/2023 06:03:12 PM
#      REVISION:  ---
#===============================================================================

trap _cleanup SIGTERM

_cleanup() {
	echo
 rm -rf build
}

mkdir ./build
find . -maxdepth 1 -not -name '.*' -type f  -exec cp -v {} ./build/ \; 
cp -vr ./icons build/
rm build/build.sh
version=$(cat manifest.json | jq -r .version)
[ -d "dist" ] || mkdir dist
zip  -r dist/harpagon_$version.zip build 

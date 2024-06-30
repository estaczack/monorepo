#!/bin/bash

echo $1
echo $2

MYPATH=`pwd`

FILEORIGIN="$MYPATH/scripts/index.html"
FILEDEST="$MYPATH/public/$1.html"

cp $FILEORIGIN $FILEDEST

JSFILEORIGIN="$MYPATH/scripts/base.js"
JSFILEDEST="$MYPATH/src/pages/$2/$1.js"

cp $JSFILEORIGIN $JSFILEDEST

echo "Don't forget to add $JSFILEDEST to $MYPATH/webpack.config.js"

touch "$MYPATH/public/json/$1.json"
echo "{}" >> "$MYPATH/public/json/$1.json"

exit 0

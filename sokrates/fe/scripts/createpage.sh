#!/bin/bash

echo $1

MYPATH=`pwd`

FILEORIGIN="$MYPATH/scripts/index.html"
FILEDEST="$MYPATH/public/$1.html"

cp $FILEORIGIN $FILEDEST

exit 0

#!/bin/bash

BASEDIR=`pwd`

echo $BASEDIR

docker rmi hypatia/api -f 

docker rmi hypatia/fe -f 

docker system prune -f 

docker volume prune -f

cd $BASEDIR/api

docker build -t hypatia/api .

cd $BASEDIR/fe

docker build -t hypatia/fe .

exit 0

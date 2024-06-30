#!/bin/sh

docker run -d --name hypatiadb -p 27017:27017 mongodb/mongodb-community-server:latest

exit 0

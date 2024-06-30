#!/bin/sh

docker run -d --name bssdb -p 27017:27017 mongodb/mongodb-community-server:latest

exit 0

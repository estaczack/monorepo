#!/bin/bash

echo "Database..."
docker run -d --name hypatia_db \
    -e MYSQL_ROOT_PASSWORD=4lf483t0 \
    -e MYSQL_USER=eddealmeida \
    -e MYSQL_PASSWORD=4lf483t0 \
    -e MYSQL_DATABASE=hypatia \
    -p 3306:3306 \
    -p 33060:33060 \
    mysql:latest --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

echo "PHPMyAdmin..."
docker run -d --name phpmyadmin \
    -e ALLOW_ARBITRARY=1 \
    -p 8080:80 \
    nazarpc/phpmyadmin:latest 

echo "Done!"

exit 0

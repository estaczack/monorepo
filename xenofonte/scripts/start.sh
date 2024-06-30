#!/bin/bash

docker stop hypatia_fe hypatia_api  

docker system prune -f

echo "API..."
docker run -d --name hypatia_api -p 3030:3030 hypatia/api:latest

echo "FE..."
docker run -d --name hypatia_fe -p 80:3000 hypatia/fe:latest

exit 0

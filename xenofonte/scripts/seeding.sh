#!/bin/bash

curl -X POST -H "Content-Type: application/json" --data '{"companyName":"Black Scorpion Software","contactName":"Dai Fachin","contactEmail":"daifanchin@gmail.com","contactPhone":"(47)99904-7093","domain":"localhost:3000"}' http://127.0.0.1:3000/api/companies

curl -X POST -H "Content-Type: application/json" --data '{"firstName":"Ed","familyName":"de Almeida","email":"edvaldoajunior@gmail.com","password":"4lf483t0","company_id":"ebdfb1bb-ff4c-5d81-bd92-2e2d0f358c1e"}' http://127.0.0.1:3000/api/users

curl -X POST -H "Content-Type: application/json" --data '{"firstName":"Daiely","familyName":"Fanchin","email":"daifanchin@gmail.com","password":"4lf483t0","company_id":"ebdfb1bb-ff4c-5d81-bd92-2e2d0f358c1e"}' http://127.0.0.1:3000/api/users

curl -X POST -H "Content-Type: application/json" --data '{"firstName":"Dionysio","familyName":"Fanchin","email":"diofanchin@gmail.com","password":"4lf483t0","company_id":"ebdfb1bb-ff4c-5d81-bd92-2e2d0f358c1e"}' http://127.0.0.1:3000/api/users

curl -X POST -H "Content-Type: application/json" --data '{"name":"English"}' http://127.0.0.1:3000/api/languages

curl -X POST -H "Content-Type: application/json" --data '{"name":"Portuguese"}' http://127.0.0.1:3000/api/languages

curl -X POST -H "Content-Type: application/json" --data '{"name":"Spanish"}' http://127.0.0.1:3000/api/languages

curl -X POST -H "Content-Type: application/json" --data '{"name":"Italian"}' http://127.0.0.1:3000/api/languages

curl -X POST -H "Content-Type: application/json" --data '{"name":"German"}' http://127.0.0.1:3000/api/languages

curl -X POST -H "Content-Type: application/json" --data '{"name":"French"}' http://127.0.0.1:3000/api/languages

curl -X POST -H "Content-Type: application/json" --data '{"name":"Fiction"}' http://127.0.0.1:3000/api/types

curl -X POST -H "Content-Type: application/json" --data '{"name":"Non-Fiction"}' http://127.0.0.1:3000/api/types

curl -X POST -H "Content-Type: application/json" --data '{"name":"Academic"}' http://127.0.0.1:3000/api/types

curl -X POST -H "Content-Type: application/json" --data '{"name":"Romance","type_id":"7cd8eebb-ef83-5747-b160-dcc0eb666b64"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Mistery","type_id":"7cd8eebb-ef83-5747-b160-dcc0eb666b64"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Terror","type_id":"7cd8eebb-ef83-5747-b160-dcc0eb666b64"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Sci-Fi","type_id":"7cd8eebb-ef83-5747-b160-dcc0eb666b64"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Fable","type_id":"7cd8eebb-ef83-5747-b160-dcc0eb666b64"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Fairy Tale","type_id":"7cd8eebb-ef83-5747-b160-dcc0eb666b64"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Fantasy","type_id":"7cd8eebb-ef83-5747-b160-dcc0eb666b64"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Historical","type_id":"7cd8eebb-ef83-5747-b160-dcc0eb666b64"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Biographies","type_id":"b75cae86-e352-5260-9a82-c2e4149af07a"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Business","type_id":"b75cae86-e352-5260-9a82-c2e4149af07a"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Cookbooks","type_id":"b75cae86-e352-5260-9a82-c2e4149af07a"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"History","type_id":"b75cae86-e352-5260-9a82-c2e4149af07a"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Essay","type_id":"b75cae86-e352-5260-9a82-c2e4149af07a"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Travel","type_id":"b75cae86-e352-5260-9a82-c2e4149af07a"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"True Crime","type_id":"b75cae86-e352-5260-9a82-c2e4149af07a"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Self-Help","type_id":"b75cae86-e352-5260-9a82-c2e4149af07a"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Mathematics","type_id":"cf000198-919a-57a2-bb4a-c0cb5c72a594"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Physics","type_id":"cf000198-919a-57a2-bb4a-c0cb5c72a594"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Biology","type_id":"cf000198-919a-57a2-bb4a-c0cb5c72a594"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Medicine","type_id":"cf000198-919a-57a2-bb4a-c0cb5c72a594"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Genetics","type_id":"cf000198-919a-57a2-bb4a-c0cb5c72a594"}' http://127.0.0.1:3000/api/genders

curl -X POST -H "Content-Type: application/json" --data '{"name":"Economy","type_id":"cf000198-919a-57a2-bb4a-c0cb5c72a594"}' http://127.0.0.1:3000/api/genders







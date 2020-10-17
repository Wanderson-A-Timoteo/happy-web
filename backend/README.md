# Criação da API para a aplicação Happy

## Comandos executados
```
yarn init -y
yarn add express
yarn add @types/express -D
yarn add typescript -D
yarn tsc --init
yarn add ts-node-dev -D
yarn add typeorm sqlite3
yarn typeorm migrations:create -n create_orphanages
yarn typeorm migration:run
yarn typeorm migration:create -n create_images
yarn typeorm migration:run
yarn add multer
yarn add @types/multer -D

```
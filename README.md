# Back-end do GoBarber

> Projeto em NodeJs, utilizando arquivos separados para organizar melhor o código

### Desenvolvido em: NodeJS

## Configurando estrutura
1. Executar os comandos

  ```
  yarn init -y
```

  ```
  yarn add express
```

2. Criar pasta e arquivos:

 src
 * app.js
 * routes.js
 * server.js


3. Para executar:

 ```
node src/server.js
```

No browser:

 ```
http://localhost:3333
```

## Nodemon & Sucrase
1. Executar os comandos

  ```
  yarn add sucrase nodemon -D
```
2. Alterar a maneira do import

 ```
  const routes = require('./routes');
```

se torna

  ```
  import routes from './routes';
```

3. Depois de editar os arquivos

 [package.json](https://github.com/JRGGRoberto/GoBarber/blob/master/package.json)

 [nodemon.json](https://github.com/JRGGRoberto/GoBarber/blob/master/nodemon.json)

Para executar:

  ```
  yarn dev
```

## Docker DB
1. Baixar e configurar imagem do BD

 ```
  docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgress
```

Sempre que quiser iniciar a serviço

 ```
  docker start database
```


## Sequelize & MVC

> ORM
 * Abstração do bd
 * Tabelas viram models

SQL

    INSERT INTO users (name, email)
       VALUES ('Roberto', 'jrggroberto@gmail.com');

    SELECT * FROM users  WHERE email = 'jrggroberto@gmail.com' LIMIT 1;

JavaScript

    User.create({
      name: 'Roberto',
      email: 'jrggroberto@gmail.com',
    });

    User.findOne({
      where: {
        email: 'jrggroberto@gmail.com'
      }
    });

#### Migrations
 * Controle de versão para BD

## Padronizando o código - ESLint, Prettier


  ```
  yarn add eslint -D

  yarn eslint --init

```

Choose this options:
  ? How would you like to use ESLint? To check syntax, find problems, and enforce code style

  ? What type of modules does your project use? JavaScript modules (import/export)

  ? Which framework does your project use? None of these

  ? Does your project use TypeScript? No

  ? Where does your code run? Node

  ? How would you like to define a style for your project? Use a popular style guide

  ? Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript)

  ? What format do you want your config file to be in? JavaScript

Apagar o arquivo package-lock.json e executar o yarn para resolver as dependencias, pois o primeiro arquivo estava para reolver por npm

  ```
  yarn
```

Instalar e configurar

  ```
  yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

  yarn eslint --fix src --ext .js

```


## Configurando Sequelize

Criar a estrutura de pastas dentro de *src*

src

 * app
  * controllers
  * models
 * config
  * database.js
 * database
  * migrations

  ```
  yarn add sequelize
  yarn add squelize-cli -D


  yarn add pg pg-hstore
```

## Migration de usuário

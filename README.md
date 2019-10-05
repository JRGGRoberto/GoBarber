# Back-end do GoBarber

> Projeto em NodeJs, utilizando arquivos separados para organizar melhor o código
Todos os títulos abaixo possuem um commit

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

  ```
  yarn sequelize migrations:create --name=create-users
```

Testar e verficar no BD
  ```
  yarn sequelize db:migrate
  yarn sequelize db:migrate:undo
```

## Criando loader de models

### Teste com os parâmetros no arquivo routes.js

## Gerando hash da senha

Instalar a extensão bcryptjs

  ```
  yarn add bcryptjs
```
Alterar o model/User.js

Para testar enviar

  ```
  POST http://localhost:3333/users
````

    {
	    "name": "Roberto",
	    "email": "jrobert@xpto.com.br",
	    "password": "123456"
    }

## Autenticação JWT

Instalar a extensão JSONWebToken

  ```
  yarn add jsonwebtoken
```
Criar arquivo app/controllers/SessionController.js

Adicionar function checkPassword em /src/app/models/User.js

Para gerar um hash do /src/config/auth.js

[Md5Online.org]](https://www.md5online.org/)

Para testar enviar

  ```
  POST http://localhost:3333/sessions
````

    {
	    "email": "jrobert@xpto.com.br",
	    "password": "123456"
    }


## Middleware de autenticação

Para testar enviar

  ```
  UPDATE http://localhost:3333/users
  No HEADER passar
  req.headers.authorization = bearer + token
````

    {
	    "email": "jrobert@xpto.com.br",
	    "password": "123456"
    }

## Update de usuário

O update sempre o email e opicionais para serem alterado
para trocar o password é necessário passar o OldPassword

Para testar enviar

  ```
  UPDATE http://localhost:3333/users
  No HEADER passar
  req.headers.authorization = bearer + token
````
    {
    	"name": "Roberto 7",
    	"email": "jroberttt@xpto.com.br7",
    	"oldPassword":"123454",
    	"password": "1234541"
    }


## Validando dados de entrada

A validação é utilizada no inicio de sessão, e nos controles do usuário

Instalar a biblioteca Yup, ela realiza o *schema validation*
  ```
  yarn add yup
```
Yup não possui export default, então a importação não tem como ser

    import yup from 'yup';

e sim

   import * from Yup from 'yup';

# Continuando a APP v2.0

## Configurando Multer

Para guardar arquivos e resolver diretórios (Win/UNIX)

Instalar a biblioteca
  ```
  yarn add multer
```
Adicionado a rota files em src/routes.js
Acicionaod o arquivo src/config/multerjs

Para testar :
Depois de criar uma sessão, copiar o token

POST http://localhost:3333/files
  Multipart
  file : arquivo
  Autentication: Bearer : token

O arquivo será copiado para
 tmp/uploads

## Avatar do usuário

* Migration File
* Migration avatar-field-to-user

## Listagem de prestadores de serviço

Lista todos os prestadores de serviço junto com informação do avatar
INDEX / GET

ProviderController.js
app.js add this to
    middlewares() {
        this.server.use(express.json());
        this.server.use(
          '/files',
          express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
        );
    }
To show image in browser

GET http://localhost:3333/providers
  Autentication: Bearer : token

## Migration e model de agendamento
*
    yarn sequelize migration:create --name=create-appointments
modified:   src/database/index.js
Criados
 * src/app/models/Appointment.js
 * src/database/migrations/20190926190352-create-appointments.js

## Agendamento de serviço

POST http://localhost:3333/appointments
  Autentication: Bearer : token de um user não provider

  JSON
   {
      "provider_id: 2,      onde 2 é um id de um provider
      "date": "2019-09-26 18:00:00"
   }


## Validações de agendamento

Instalar a biblioteca para trabalhar com datas
  ```
  yarn add date-fns@next
```

## Listando agendamentos do usuário

Criar GET /appointments

routes.get('/appointments', AppointmentController.index);

## Aplicando paginação

Alterar o a requisição add as informações a baixo na aba Query

    page 1

E alterar AppointmentController.js

## Listando agenda do prestador

Adicionar a rota
schedule

E passar a query da data


## Instalando e configurando MongoDB via Docker

Instalando uma imagem:

    docker run --name mongobarber -p 27017:27017 -d -t mongo

Para testar: ir no browser acessar:

    localhost:27017

Deve aparecer uma mensagem:

*It looks lik you trying to access MongoDB over HTTP on the native driver port.*

Para a aplicação poder se conectar ao MongoDB, é necessário instlar:

    yarn add mongoose

Como a conexão sugerida estava depreciada, tive que adicionar useUnifiedTopology: true,
no parametro de conexão

## Notificando novos agendamentos

Instalar o *MongoDB Compass Community* para verifiar os dados

A parte do banco MongoDB fica em src/shemas/Notification.js

## Listando notificações do usuário

rota Index /notifications

## Marcar notificações como lida

Criar a rota

{{ base_url  }}/notifications/<id do MongoDB>

## Cancelamento de agendamento


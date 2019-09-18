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
 
<<<<<<< HEAD
 ```
node src/server.js
```

No browser:

 ```
http://localhost:3333
```

## Nodemon &Sucrase
1. Executar os comandos

  ```
  yarn add sucrase nodemon -D
=======
```
node src/server.js
>>>>>>> cc820761823bcaa873c6b935016fe618ff2bea1f
```
2. Alterar a maneira do import

 ```
  const routes = require('./routes'); 
```

<<<<<<< HEAD
se torna

  ```
  import routes from './routes';
=======
```
http://localhost:3333
>>>>>>> cc820761823bcaa873c6b935016fe618ff2bea1f
```

3. Depois de editar os arquivos 

 [package.json](https://github.com/JRGGRoberto/GoBarber/blob/master/package.json)

 [nodemon.json](https://github.com/JRGGRoberto/GoBarber/blob/master/nodemon.json)

Para executar:

  ```
  yarn dev
```
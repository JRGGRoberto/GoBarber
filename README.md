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

## Nodemon &Sucrase
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
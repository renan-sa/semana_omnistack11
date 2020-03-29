# Semana OmniStack 11 Rocketseat

# NodeJs

Uma plataforma baseada no motor V8 do Chrome e utiliza a linguagem javascript para desenvolvimento de aplicações para serem executadas no servidor. [**Mais informações**](https://nodejs.org/pt-br/)

## NPM

Gerenciador de pacotes utilizado pelo NodeJs e que já está incluso em sua instalação. Permite acessar um grande repositório de soluções para o desenvolvimento de aplicações. [**Mais informações**](https://www.npmjs.com/)

## ExpressJs

Biblioteca instalável via NPM para abstrair e faciliar a criação de rotas em aplicações NodeJs. [**Mais informações**](https://expressjs.com/pt-br/starter/hello-world.html)


## Nodemon

Biblioteca instalável via NPM que cria um "ouvinte" para as execuções de aplicações NodeJs, poupando o tempo de recarregar as páginas, atualizando elas cada vez que uma alteração é salva. [**Mais informações**](https://nodemon.io/)


## KnexJs

Biblioteca instalável via NPM que auxilia nos trabalhos com banco de dados. [**Mais informações**](http://knexjs.org/)


## Celebrate

Biblioteca instalável via NPM que auxilia no processo de validação da aplicação, tornando mais simples a criação de validações com o conceito de middleware. [**Mais informações**](https://www.npmjs.com/package/celebrate)


## Cors

Biblioteca instalável via NPM que fornece alguns mecanismos de seguranças para a aplicação web. [**Mais informações**](https://github.com/expressjs/cors)


## Jest

Biblioteca instalável via NPM que fornece recursos para criação de testes automáticos em nossas aplicações. [**Mais informações**](https://jestjs.io/)


# HTTP

Tipos de requisição:
- GET
  - Buscar/Listar informações
- POST
  - Criar/Inserir informações
- PUT
  - Atualizar informações
- DELETE
  - Excluir informações

Tipos de parâmetros:
- Query Params
  - Um ou mais parâmetros nomeados vindos pela URL
  - Ex:
  URL da requisição
  > http://localhost:3333/usuarios?nome=diego&idade=26
  Pegando do parâmetros no servidor
  > const parametros = request.query;
- Route Params
  - Um parâmetros vindo pela URL
  - Ex:
  URL da requisição
  > http://localhost:3333/usuarios/1
  Pegando do parâmetros no servidor
  > // Rota
  > /usuarios/:id
  > // Obtendo o parâmetro
  > const parametro = request.params;
- Request Body
  - Informações que venham do corpo da requisição
  - Ex:
  Pegando os dados do corpo da requisição no servidor
  > // Comando antes dos métodos para o servidor entender o formato dos dados (usando EXPRESS)
  > app.use(express.json());
  > // Obtendo a informação
  > const body = request.body;

# Insomnia

Um software que auxilia na simulação de aplicações back-end permitindo fazendo chamadas HTTP usando todos os métodos disponíveis. [**Mais informações**](https://github.com/expressjs/cors)

# ReactJs

Uma biblioteca para construção do front-end de aplicações Web utilizando a linguagem de programação javascript. [**Mais informações**](https://pt-br.reactjs.org/)

## react

Biblioteca base de funcionalidades das aplicações escritas em ReactJs.

## react-dom

Biblioteca de funcionalidades do ReactJs de construção e manipulação do DOM nas páginas HTML.

## react-router-dom

Biblioteca que auxilia na utilização de rotas dentro da aplicação ReactJs.

## react-icons

Biblioteca de icons do ReactJs que dispõe de diversos ícones de vários repositórios diferentes da Web.

# React Native

Biblioteca para construção de aplicações para dispositivos móveis (Android e IPhone) usando como linguagem de programação o javaScript e executando como aplicação nativa nos dispositivos. [**Mais informações**](https://reactnative.dev/)

## react

Biblioteca base de funcionalidades das aplicações escritas em React Native.

## react-native

Biblioteca base de componentes para construção das aplicações mobile.


## @react-navigation

Biblioteca para criação e utilzação de rotas de navegação dentro da aplicação, permitindo navegar entre as telas (componentes).


## @expo/vector-icons

Biblioteca de icons do React Native que dispõe de diversos ícones de vários repositórios diferentes da Web.

## expo-mail-composer

Biblioteca para envio de email em aplicações React Native.

## Axios

Biblioteca com funcionalidades que permitem a aplicação em React Native fazer requisições HTTP a um servidor externo.

## Intl

Biblioteca de internacionalização para aplicações, auxiliando com conversões de valores monetário dentre outras funcionalidades.

# Expo

Uma plataforma que permite o desenvolvimento e deploy de aplicações React Native de maneira simples e ágil. [**Mais informações**](https://expo.io/)
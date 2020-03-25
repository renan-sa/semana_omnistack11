# OmniStack Rocketseat

# NodeJs
## NPM
## Express
## Nodemon
## KnexJs
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
# CORS
# React
# React Native
# Expo
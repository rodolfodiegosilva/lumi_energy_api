# Lumi Energy API

## Visão Geral

Este projeto é uma API para processar faturas de energia elétrica, extraindo dados de PDFs, armazenando-os em um banco de dados PostgreSQL e disponibilizando-os através de endpoints REST.

## Tecnologias Utilizadas

- **Node.js**: v20.11.1
- **Express.js**: Framework para construir a API.
- **Sequelize**: ORM para interagir com o banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **Jest**: Framework de testes para JavaScript.
- **Multer**: Middleware para upload de arquivos.

## Configuração do Ambiente

### Requisitos

- Node.js v20.11.1
- PostgreSQL
- npm (gerenciador de pacotes do Node.js)

### Passos para Configuração

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. **Instale as Dependências**

    ```bash
    npm install

3. **Configuração do Banco de Dados**

    - Crie um banco de dados PostgreSQL e atualize as informações de conexão no arquivo config/config.json:
    ```json
        {
            "development": {
            "username": "seu-usuario",
            "password": "sua-senha",
            "database": "nome-do-banco",
            "host": "127.0.0.1",
            "dialect": "postgres"
            }
        }
4. **Rodar as Migrações**
    ```bash
    npx sequelize-cli db:migrate

## Comandos Disponíveis

### Rodar o Servidor
    ```bash
    npm start

### Rodar o Servidor
```bash
npm test

### Rodar as Migrações
```bash
npx sequelize-cli db:migrate

### Gerar uma Nova Migração
```bash
npx sequelize-cli migration:generate --name nome-da-migracao

### Desfazer a Última Migração
```bash
npx sequelize-cli db:migrate:undo

Estrutura do Projeto
src/app.js: Configuração principal do aplicativo Express.
src/routes.js: Definição das rotas da API.
src/controllers: Controladores para gerenciar a lógica de cada endpoint.
src/services: Serviços contendo a lógica de negócios.
src/repositories: Repositórios para interagir com o banco de dados.
src/models: Definição dos modelos do Sequelize.
src/migrations: Arquivos de migração do Sequelize.
uploads: Diretório para armazenar os PDFs carregados.
Configuração das Variáveis de Ambiente
Certifique-se de definir as seguintes variáveis de ambiente no seu sistema ou arquivo .env:

PORT: Porta na qual o servidor irá rodar (ex: 3001).
DATABASE_URL: URL de conexão do banco de dados PostgreSQL.
Endpoints da API
POST /api/upload-pdf
Faz o upload de um PDF e processa os dados.

Request:

Headers: Content-Type: multipart/form-data
Body: FormData com um campo file contendo o arquivo PDF.
Response:

201 Created com os dados extraídos do PDF.
400 Bad Request se nenhum arquivo for enviado.
500 Internal Server Error se houver um erro ao processar o PDF.
Exemplo:

bash
Copy code
curl -X POST http://localhost:3001/api/upload-pdf \
-F file=@/caminho/para/o/arquivo.pdf
POST /api/invoices
Cria uma nova fatura.

Request:

Headers: Content-Type: application/json
Body: JSON com os dados da fatura.
Response:

201 Created com a fatura criada.
500 Internal Server Error se houver um erro ao criar a fatura.
Exemplo:

bash
Copy code
curl -X POST http://localhost:3001/api/invoices \
-H 'Content-Type: application/json' \
-d '{
  "clientNumber": "1234",
  "referenceMonth": "2023-01",
  "totalCost": 100.0,
  "energyConsumption": 200.0,
  "energyCost": 50.0,
  "sceeEnergy": 30.0,
  "sceeCost": 10.0,
  "gdEnergy": 15.0,
  "gdCost": 5.0,
  "municipalTax": 2.5,
  "dueDate": "2023-02-01",
  "issueDate": "2023-01-15"
}'
GET /api/invoices
Retorna todas as faturas.

Response:

200 OK com uma lista de faturas.
500 Internal Server Error se houver um erro ao buscar as faturas.
Exemplo:

bash
Copy code
curl -X GET http://localhost:3001/api/invoices
GET /api/invoices/:id
Retorna uma fatura pelo ID.

Request:

Params: id - ID da fatura.
Response:

200 OK com a fatura encontrada.
404 Not Found se a fatura não for encontrada.
500 Internal Server Error se houver um erro ao buscar a fatura.
Exemplo:

bash
Copy code
curl -X GET http://localhost:3001/api/invoices/1
PUT /api/invoices/:id
Atualiza uma fatura pelo ID.

Request:

Params: id - ID da fatura.
Headers: Content-Type: application/json
Body: JSON com os dados atualizados da fatura.
Response:

200 OK com a fatura atualizada.
404 Not Found se a fatura não for encontrada.
500 Internal Server Error se houver um erro ao atualizar a fatura.
Exemplo:

bash
Copy code
curl -X PUT http://localhost:3001/api/invoices/1 \
-H 'Content-Type: application/json' \
-d '{
  "totalCost": 120.0,
  "energyConsumption": 220.0
}'
DELETE /api/invoices/:id
Exclui uma fatura pelo ID.

Request:

Params: id - ID da fatura.
Response:

204 No Content se a fatura for excluída.
404 Not Found se a fatura não for encontrada.
500 Internal Server Error se houver um erro ao excluir a fatura.
Exemplo:

````bash
curl -X DELETE http://localhost:3001/api/invoices/1
Contato
Para mais informações, entre em contato com seu-email@dominio.com.




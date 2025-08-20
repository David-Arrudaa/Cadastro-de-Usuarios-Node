# API para Cadastro de Usuários 🚀

<p align="center">
  <img src="https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge" alt="Status do Projeto: Concluído"/>
</p>

## 📖 Sobre o Projeto

Este projeto é a API RESTful (Back-End) para uma aplicação de cadastro e listagem de usuários. Desenvolvida com **Node.js** e **Express**, a API gerencia toda a lógica de negócios, validações e a persistência dos dados.

O objetivo foi praticar a construção de servidores, a definição de rotas RESTful, a integração com o ORM **Prisma** e a conexão segura com um banco de dados NoSQL (**MongoDB**).

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias Back-End:

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
</p>

## ✨ Funcionalidades Principais

- **Arquitetura RESTful:** API estruturada seguindo os princípios REST para manipulação de usuários.
- **Endpoints CRUD:** Implementação das rotas para **Criar** (`POST /users`), **Ler** (`GET /users`), **Atualizar** (`PUT /users/:id`) e **Deletar** (`DELETE /users/:id`).
- **ORM com Prisma:** Utilização do Prisma para gerenciar o schema do banco de dados e executar queries de forma segura e eficiente.
- **Conexão com MongoDB:** Persistência de dados em um banco NoSQL, configurado para conectar com uma instância do MongoDB Atlas.
- **Segurança com Variáveis de Ambiente:** Uso de um arquivo `.env` para armazenar a string de conexão do banco de forma segura.
- **Middleware CORS:** Permite que a API receba requisições de outras origens, como a aplicação Front-End em React.

## 🚀 Como Executar

1.  **Clone este repositório:**
    ```bash
    git clone [https://github.com/David-Arrudaa/Cadastro-de-Usuarios-Node.git](https://github.com/David-Arrudaa/Cadastro-de-Usuarios-Node.git)
    ```
2.  **Navegue até a pasta do projeto.**
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Crie um arquivo `.env`** na raiz do projeto e adicione sua string de conexão do MongoDB Atlas:
    ```env
    DATABASE_URL="sua-string-de-conexao-com-o-mongodb"
    ```
5.  **Inicie o servidor:**
    ```bash
    npm run dev
    ```
- O servidor será iniciado em `http://localhost:3000`.

## 🔗 Front-End

Esta API foi desenvolvida para ser consumida pela seguinte aplicação Front-End:
- **[Interface de Cadastro de Usuários (React)](https://github.com/David-Arrudaa/Cadastro-de-Usuarios-React)**

## 👨‍💻 Autor

**David Arruda**.

### 📫 Onde me encontrar

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/david-viniciusarruda/)
[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:david.viniciusarruda@gmail.com)

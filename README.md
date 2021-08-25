<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="./images/banner.png" />
</h1>

<h4 align="center"> 
Text to Speech
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

O projeto Text to Speech, se trata de um projeto de teste para a avaliação de uma Vaga Fullstack, para a D1 Smarkio.
Consistindo na construção de uma arquitetura com Backend e Frontend, com a integração com um banco de dados e da utilização da API de text to speech da IBM Watson.


---

## ⚙️ Funcionalidades

- O usuário pode inserir novos comentários
- O Comentário é inserido no banco e a lista atualizada
- O usuário pode ouvir o comentário listado ao clicar no ícone.

---

## 🎨 Layout



<!-- 
### Mobile

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/home-mobile.png" width="200px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/detalhes-mobile.svg" width="200px">
</p> -->

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
 

  <img alt="Imagem do Projeto" title="Text to Speech" src="./images/layout.png" width="600px">
</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta backend) 
2. Frontend (pasta frontend)


💡O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ https://github.com/Dinamous/text-to-speech.git

# Acesse a pasta do projeto no terminal/cmd
$ cd text-to-speech

# Vá para a pasta backend
$ cd backend

# Instale as dependências
$ npm install

# Altere as credenciais da sua máquina local no arquivo config/config.json, ex:
"username": "root",
"password": "root",

# Crie um arquivo .env para suas credenciais para a API text-to-speech da IBM
API_KEY = {sua key}
API_URL = {sua URL}

#Crie o banco de dados através do sequelize
$ npx sequelize db:create

# Execute a aplicação em modo de desenvolvimento
$ node index

# O servidor inciará na porta:5000 - acesse http://localhost:5000 

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Abra um novo terminal dentro do diretório atual
# Acesse a pasta do projeto no seu terminal/cmd
$ cd frontend

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/))
-   **[Axios](https://github.com/axios/axios)**
-   **[Howler](https://github.com/goldfire/howler.js/)**


> Veja o arquivo  [package.json](https://github.com/Dinamous/text-to-speech/blob/master/frontend/package.json)

#### **Server**  ([NodeJS](https://nodejs.org/en/) 
-   **[Express](https://expressjs.com/)**
-   **[Sequelize](https://github.com/sequelize/sequelize)**
-   **[Axios](https://github.com/axios/axios)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[MySql](https://github.com/mysqljs/mysql#readme3)**
-   **[dotENV](https://github.com/motdotla/dotenv)**


> Veja o arquivo  [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/server/package.json)


## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

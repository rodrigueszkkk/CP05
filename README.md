# Projeto Global Solution

<p align="center">
  <img alt="Linguagem Principal" src="https://img.shields.io/github/languages/top/[SEU_USUARIO]/[SEU_REPOSITORIO]">
  <img alt="Licença" src="https://img.shields.io/github/license/[SEU_USUARIO]/[SEU_REPOSITORIO]">
  <img alt="Data da Última Atualização" src="https://img.shields.io/github/last-commit/[SEU_USUARIO]/[SEU_REPOSITORIO]">
</p>

<p align="center">
  Aplicação web desenvolvida focada no gerenciamento e acompanhamento de sessões de estudo.
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-funcionalidades-e-páginas">Funcionalidades</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-tecnologias-utilizadas">Tecnologias</a> •
  <a href="#-deploy">Deploy</a> •
  <a href="#-equipe">Equipe</a>
</p>

## 📖 Sobre o Projeto

Este projeto consiste em uma interface interativa para que usuários possam criar, visualizar e gerenciar suas sessões de estudo. A aplicação foi construída com foco em boas práticas de desenvolvimento React, incluindo otimização de performance e tratamento de erros.

## ✨ Funcionalidades e Páginas

O projeto atualmente possui as seguintes páginas e funcionalidades:

* **`/` (Home):** Página inicial que exibe um resumo e a lista de todas as sessões de estudo.
* **`/add` (NewSession):** Página com um formulário para adicionar uma nova sessão de estudos.
* **`/session/:id` (SessionDetails):** Página para visualizar os detalhes completos de uma sessão específica.
* **`*` (NotFound):** Página de erro 404, exibida quando uma rota não é encontrada.

## 🚀 Como Executar

Para configurar e executar o projeto em sua máquina local, siga os passos abaixo.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)

**Instalação e Execução:**

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173` (ou na porta indicada no terminal).

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com um ecossistema moderno de desenvolvimento front-end:

* **Framework Principal:**
    * **React:** Biblioteca para construção de interfaces de usuário.
    * **TypeScript:** Para adicionar tipagem estática e segurança ao código.

* **Roteamento:**
    * **React Router DOM:** Para gerenciar a navegação e as rotas da aplicação de forma declarativa.

* **Otimização de Performance:**
    * **Code Splitting (`lazy` e `Suspense`):** As páginas são carregadas sob demanda para diminuir o tempo de carregamento inicial.
    * **Hooks de Otimização (`useMemo` e `useCallback`):** Implementados no arquivo `App.tsx` para evitar renderizações desnecessárias e recálculos custosos.

* **Tratamento de Erros:**
    * **React Error Boundary:** Utilizado para capturar erros na árvore de componentes e exibir uma interface de fallback, melhorando a robustez da aplicação.

## 🔗 Deploy

O projeto está hospedado na Vercel e pode ser acessado através do link abaixo:

**[Acesse a versão de produção aqui](COLOQUE-O-SEU-LINK-AQUI)**

## 👥 Equipe e Responsabilidades

Abaixo está a divisão de tarefas entre os membros da equipe:

| Nome    | Responsabilidades                                                                                                                         |
| :------ | :---------------------------------------------------------------------------------------------------------------------------------------- |
| Gabriel/https://github.com/GabSolano | Implementação do Tailwind CSS, criação do header, study cards e desenvolvimento das páginas: `NewSession`, `NotFound`, `SessionDetails` e `Home`. |
| Leandro/https://github.com/LeandroGuaridoOliveira | Desenvolvimento dos componentes `ErrorFallback`, `Loading`, `Footer`, e estruturação do layout principal no arquivo `App.tsx`.            |
| Kaiky/https://github.com/rodrigueszkkk   | Criação da estrutura inicial do projeto, deploy na Vercel, correções de bugs gerais (fix bugs) e ajustes no layout e nos study cards.      |
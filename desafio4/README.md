## -Desafio4

Utilizando React.js


### Informações do desafio:

Neste desafio você deverá criar uma aplicação React.js com TypeScript para listar os dados consumidos de uma API Rest.

Crie a aplicação usando o comando: npx create-react-app --typescript nome-do-projeto.

Instale o react-router para criar uma página de listagem de usuários. Esta página deverá ser acessível, acessando o endereço: http://localhost:3000/users.

Esta listagem de usuários buscará os usuários de uma API Rest externa, use o endpoint: https://reqres.in/api/users.

Faça um AJAX usando a biblioteca axios dentro do componente React de listagem de usuários. Liste os usuários em uma tabela, lista ou como desejar. Não use Docker Compose nesta aplicação, deveremos ter apenas um Dockerfile na raiz do projeto expondo a porta 3000 que é a porta que o servidor disponibilizará a aplição React.js. Você pode usar a configuração Docker deste repositório: https://github.com/codeedu/maratona4-esquenta/tree/master/frontend, como exemplo.


### -Entrega:

[URL DockerHub](https://hub.docker.com/r/mrscoelho/fullcycle4_d04)


### -Validação:

1-Executar o container: docker run -p 3000:3000 mrscoelho/fullcycle4_d04:latest

2-Abrir em um browser a seguinte URL: http://localhost:3000/

## -Desafio3

Trabalhando com Nest.js


### Informações do desafio:

Neste desafio você deverá criar uma API Rest com o Nest.js.
Devemos criar um recurso de categorias com a URI categories com dois endpoints:

- GET categories -> Consulta de categorias
- POST categories -> Criação de categorias

A aplicação terá um banco de dados SQLite para armazenar os dados, este banco ficará na raiz do projeto e usará o TypeORM para persistência dos dados.

O banco SQLite deverá estar no controle de versão da aplicação e deverá ter 10 categorias cadastradas.

Utilize o TypeORM, que é uma biblioteca Node.js para administrar a persitência de dados em banco de dados através do conceito de ORM (Object Relation Mapper).

A aplicação deverá rodar com Docker.

Dica: Veja a aula abaixo sobre API Rest Nest.js para saber como configurar o Nest.js com Docker e usar o TypeORM com banco de dados. Há um repositório Git na descrição do vídeo com um exemplo de API Rest com Nest.js usando Docker e TypeORM.
https://www.youtube.com/watch?v=BT7novtdAgI

Não use docker-compose nesta aplicação, deveremos ter apenas um Dockerfile na raiz do projeto expondo a porta 3000, que é a porta que o servidor do Nest.js para rodar a aplicação web.


### -Entrega:

[URL DockerHub](https://hub.docker.com/r/mrscoelho/fullcycle4_d03)


### -Validação:

1-Executar o container: docker run -p 3000:3000 mrscoelho/fullcycle4_d03:latest

2-Abrir em um browser a seguinte URL: http://localhost:3000/
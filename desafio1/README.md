## -Desafio1:

Hello World com Docker

### -Informações do desafio:

Durante toda a Maratona utilizaremos containers como base de desenvolvimento bem como para produção. Logo, ter uma noção básica de Docker é mais do que necessário.

Nesse desafio, você terá de criar uma imagem docker que quando executada deverá expor a porta 8080 exibindo a mensagem: **Eu sou Full Cycle**.
Fique na liberdade para utilizar a tecnologia/linguagem de programação de sua escolha. Exemplo: você poderá criar uma simples aplicação usando Node.js com Express para exibir essa mensagem.
Gere o build da sua imagem, faça o push para o DockerHub e a informe no formulário abaixo.

Se você nunca teve nenhuma experiência com docker, recomendamos que assista a seguinte aula: https://www.youtube.com/watch?v=yb2udL9GG2U


### -Entrega:

[URL DockerHub](https://hub.docker.com/r/mrscoelho/fullcycle4_d01)


### -Validação:

1-Executar o container:
docker run -p 8080:8080 mrscoelho/fullcycle4_d01:latest

2-Abrir em um browser a seguinte URL:
http://localhost:8080/

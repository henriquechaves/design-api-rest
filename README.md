# Guia de Design da API

Trata-se de um guia para o desenvolvimento de APIs REST

Aqui utilizamos o padrão MVC com a diretório source e os demais diretórios dentro, como controllers, models e etc.

A separação de responsabilidades facilita a modularização das funcionalidades da aplicação e possibilita:

+ Manutenibilidade: Quando uma modificação precisa ser feita é mais fácil de descobrir onde é e também onde vai causar impacto.
+ Desacoplar models e views facilita os testes em ambos isoladamente. Testando a lógica de negócio em models e a usabilidade em views.
+ Reutilização de código

Nota-se que para APIs, a parte da view não é aplicada. Assim mm APIs o controller recebe a requisição da rota, faz a chamada para o model realizar a lógica de negócio e retorna a resposta para o usuário.

A arquitetura de Microservices é uma abordagem que torna o desenvolvimento Web mais ágil e facilita a manutenção da bases de código.
Vamos explorar as características que tornam containers uma escolha interessante, tanto para desenvolvimento e testes da aplicação como para redução de custos e sua administração, ao criar uma arquitetura baseada em microservices no AWS com Docker.

## MICROSERVICES

+ Micro-service APIs
+ Docker & Docker Compose (Toda uma árvore de serviços interdependentes com apenas um comando!)
+ NGINX
+ Node 6.x
+ Express 4.0
+ Socket.io Websockets
+ PassportJS Auth
+ Swagger 2.0
+ Neo4j
+ MongoDB
+ TDD (Test Driven Development ou Desenvolvimento Guiado por Testes)

## Leituras

+ [Netflix Scaling Node](https://medium.com/@nodejs/netflixandchill-how-netflix-scales-with-node-js-and-containers-cf63c0b92e57#.9bzn8wm4u)
+ [Building Microservices with OpenSource Technologies](http://www.developer.com/open/building-microservices-with-open-source-technologies.html)
+ [Docker Micro-services with Node](http://anandmanisankar.com/posts/docker-container-nginx-node-redis-example/)

# Anotações Backend

- **NodeJS**
  - Plataforma que utiliza o motor V8 para fazer a comunicação entre o back e o front
  - Por baixo dos panos utiliza event loop (last in - first out)



- **API**
  - Uma requisição feita pelo cliente onde é retornado uma estrutura de dados (JSON, XML e etc)
    - As requisições utilizam métodos HTTP (GET, POST, PUT, DELETE)
    - ![image-20201027054417072](/home/yanhaw6/.config/Typora/typora-user-images/image-20201027054417072.png)
  - Se criar ou editar algum item na requisição utilizamos o Body (Apenas POST/PUT)
  - Headers são conteúdos que não tem nada haver com o body
  - HTTP Codes
    - 1xx: Informativo
    - 2xx: Sucesso
    - 3xx: Redirecionamnto
    - 4xx: Erro do usuário
    - 5xx: Erro no servidor
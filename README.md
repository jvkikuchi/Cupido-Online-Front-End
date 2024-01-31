# Culpido Online

Backend da aplicação criada para o Desafio da BGC Brasil.

# Tecnologias Utilizadas

- AWS API Gateway
- AWS DynamoDB
- AWS Cognito
- AWS Lambda
- AWS S3
- Serverless Framework
- ReactJS

# Descriçao do Desafio

O Desafio prático é criar o "Cupido online", um site simples onde uma pessoa pode enviar uma mensagem anônima para seu crush. A ideia é que nesse site tenha um formulário para que o remetente escreva o nome, mensagem e email do destinatário. Quando o formulário for submetido, um email deve ser disparado para o destinatário anunciando a mensagem enviada. Fique a vontade para pensar nos textos e layouts do seu site!

Sinta-se livre para pensar em funcionalidades extras, como login para acessar o histórico de mensagens, possibilidade de responder o email com um match, etc. Esses extras são uma ótima possibilidade de nos mostrar sua visão de como esse desafio poderia se tornar um produto ainda melhor!

Uma opção que pode facilitar sua vida é desenvolver em um Linux, vai economizar um tempo sem os erros de permissão do Windows (se não tiver como, sem problemas, funciona no Windows também). Caso seja necessário, você também pode utilizar uma IDE online, nós indicamos o Cloud9.

Para desenvolver, é preciso utilizar as seguintes tecnologias:

- Serverless Framework

- AWS Lambda

- AWS API Gateway

- ReactJS

- AWS S3 (para o deploy do site)

O Serverless e Lambda devem ser utilizados com NodeJS (que é como geralmente fazemos nosso stack), Possivelmente (não é obrigatório, mas é legal se conseguir usar), vai ser interessante ainda usar outras serviços da Amazon AWS, como:

- Banco de Dados NoSQL - DynamoDB

- Login e Autorização - Cognito

- Controle de fluxos - StepFunctions

Todos os serviços da AWS listados aqui possuem nível gratuito.

Sobre o envio dos emails do cupido, não é necessário usar o AWS SES, fique à  vontade para usá-lo ou escolher outra ferramenta para realizar os envios!

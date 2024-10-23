<!--
title: 'Serverless Framework Node Express API on AWS'
description: 'This template demonstrates how to develop and deploy a simple Node Express API running on AWS Lambda using the Serverless Framework.'
layout: Doc
framework: v4
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, Inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node Express API on AWS

This template demonstrates how to develop and deploy a simple Node Express API service running on AWS Lambda using the Serverless Framework.

This template configures a single function, `api`, which is responsible for handling all incoming requests using the `httpApi` event. To learn more about `httpApi` event configuration options, please refer to [httpApi event docs](https://www.serverless.com/framework/docs/providers/aws/events/http-api/). As the event is configured in a way to accept all incoming requests, the Express.js framework is responsible for routing and handling requests internally. This implementation uses the `serverless-http` package to transform the incoming event request payloads to payloads compatible with Express.js. To learn more about `serverless-http`, please refer to the [serverless-http README](https://github.com/dougmoscrop/serverless-http).

## Usage

### Deployment

Install dependencies with:

```
npm install
```

and then deploy with:

```
serverless deploy
```

After running deploy, you should see output similar to:

```
Deploying "aws-node-express-api" to stage "dev" (us-east-1)

✔ Service deployed to stack aws-node-express-api-dev (96s)

endpoint: ANY - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com
functions:
  api: aws-node-express-api-dev-api (2.3 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [`httpApi` event docs](https://www.serverless.com/framework/docs/providers/aws/events/http-api/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in the following response:

```json
{ "message": "Hello from root!" }
```

### Local development

1.- Update Files configuration


``` 
copy **secrets.example.json** as **.secrets.json** and update with the keys

Note: for Unit test you need instance of MySql for test:
copy **env.example** as **.env** and update with the keys
```


2.- run dependencies

``` 
npm install
```


3.- run next comand:

```
serverless offline

```
 
or  command to Hot reload code updates

```
serverless offline start --reloadHandler
```

 After running, you should see output similar to:

```
    ───────────────────────────────────────────────────────────────────────┐
   │                                                                       │
   │   ANY  | http://localhost:3000/{default*}                             │
   │   POST | http://localhost:3000/2015-03-31/functions/api/invocations   │
   │                                                                       │
   └───────────────────────────────────────────────────────────────────────┘

Server ready: http://localhost:3000 
```

## Rutas

| Método | Ruta              | Descripción                | Ejemplo de Solicitud                                   |
|--------|-------------------|----------------------------|--------------------------------------------------------|
| GET    | `/api/clients`    | All clients                | `curl -X GET http://localhost:3000/api/clients`        |
| POST   | `/api/clients`    | Create new client          | `curl -X POST http://localhost:3000/api/clients -H "Content-Type: application/json" -d '{"firstname": "O..","lastname": "Fer..","dni": 32343456,"age": 29,"linkedin": "linkedin.com"}'` |
| GET    | `/api/clients/:id`| Client by ID               | `curl -X GET http://localhost:3000/api/clients/1`      |
| GET    | `/api/films/:id`  | Films by ID                | `curl -X GET http://localhost:3000/api/films/1`        |
| GET    | `/api/people/:id` | people by ID               | `curl -X GET http://localhost:3000/api/people/1`       |
| GET    | `/api/planets/:id`| planets by ID              | `curl -X GET http://localhost:3000/api/planets/1`      | 
| GET    | `/api/species/:id`| species by ID              | `curl -X GET http://localhost:3000/api/species/1`      |
| GET    |`/api/starships/:id`| starships by ID           | `curl -X GET http://localhost:3000/api/starships/3`    |
| GET    |`/api/vehicles/:id`| vehicles by ID             | `curl -X GET http://localhost:3000/api/vehicles/4`     |




### Demo

```
https://pk7ke5soyc.execute-api.us-east-1.amazonaws.com/
```


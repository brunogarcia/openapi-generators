# Create a HTTP Client from an Open API definition

## What is Open API?

OpenAPI Specification (OAS) is a community-driven open specification within the [OpenAPI Initiative](https://www.openapis.org/), a Linux Foundation Collaborative Project. The OpenAPI Specification defines a standard, programming language-agnostic interface description for REST APIs, which allows both humans and computers to discover and understand the capabilities of a service without access to source code, additional documentation, or inspection of network traffic.

## What is a HTTP Client?

A HTTP client is a piece of software that allows you to make HTTP requests. It's a library that you can use in your application to make HTTP requests.

## What is MSW?

[MSW](https://mswjs.io) is a library that allows you to mock HTTP requests. It's a library that you can use in your application to mock HTTP requests.

## Description

- The main goal of this project is to generate a HTTP client from an Open API definition.
- The definition was copied from the [Open API Petstore](https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml) project.
- I've created a simple demo to check if the generated code works. And it works! 😀

## Tools

- This project is using the [typescript-fetch](https://openapi-generator.tech/docs/generators/typescript-fetch/) for generate the HTTP Client.
  - Anyway, there are other generators that can be used. Check the [Client Generator](https://openapi-generator.tech/docs/generators#client-generators) page.
- This project is using [msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock) to generate random mock data from OpenAPI descriptions for [MSW](https://mswjs.io).

## Generate the HTTP Client

If you want to generate the HTTP Client, first you need to install [Docker](https://docs.docker.com/get-docker/).
Then, run the following command:

```shell
docker run --rm \
    -v $PWD:/local openapitools/openapi-generator-cli generate \
    -i /local/petstore.yaml \
    -g typescript-fetch \
    -o /local/api
```

## Generate the Mock Server

We use [msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock) to generate random mock data from OpenAPI descriptions for [MSW](https://mswjs.io).

```shell
npx msw-auto-mock petstore.yaml -o ./mock.js --base-url http://petstore.swagger.io/v2
```

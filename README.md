# Create a HTTP Client from an Open API definition

## What is Open API?

OpenAPI Specification (OAS) is a community-driven open specification within the [OpenAPI Initiative](https://www.openapis.org/), a Linux Foundation Collaborative Project. The OpenAPI Specification defines a standard, programming language-agnostic interface description for REST APIs, which allows both humans and computers to discover and understand the capabilities of a service without access to source code, additional documentation, or inspection of network traffic.

## What is a HTTP Client?

A HTTP client is a piece of software that allows you to make HTTP requests. It's a library that you can use in your application to make HTTP requests.

## Description

- The main goal of this project is to generate a HTTP client from an Open API definition.
- The definition was copied from the [Open API Petstore](https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml) project.
- This project is using the [typescript-fetch](https://openapi-generator.tech/docs/generators/typescript-fetch/) generator. Anyway, there are other generators that can be used. Check the [Client Generator](https://openapi-generator.tech/docs/generators#client-generators) page.
- The generated code is not modified.
- I've created a simple demo to check if the generated code works. And it works! 😀

## Run the generator

If you want to generate the HTTP Client, first you need to install [Docker](https://docs.docker.com/get-docker/).
Then, run the following command:

```shell
docker run --rm \
    -v $PWD:/local openapitools/openapi-generator-cli generate \
    -i /local/petstore.yaml \
    -g typescript-fetch \
    -o /local/api
```

## Build the project

If you want to build the project, you need to install the dependencies and run the build script.

This script run the lint before build the HTTP client.

```shell
npm install
npm run build
```

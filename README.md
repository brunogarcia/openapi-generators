# Research OpenAPI for auto-generating API Client and API Mock

## Description

- The main goal of this project is to generate a API CLient and API Mock from an Open API definition.
- The definition was copied from the [Open API Petstore](https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml) project.
- I've created a simple demo to check if the generated code works. And it works! 😀

## App Architecture 

![App Architecture](app-architecture.png)

## What is Open API?

[Open API](https://www.openapis.org/) is a specification that allows you to describe your REST API in a standard way.

## What is a API Client?

A API client is a piece of software that allows you to **make** HTTP requests.

## What is a API Mock?

It's a piece of software that you can use in your application to **mock** HTTP requests.

## Tools

- [typescript-fetch](https://openapi-generator.tech/docs/generators/typescript-fetch/) for generate the API Client. There are other generators that can be used. Check the [Client Generator](https://openapi-generator.tech/docs/generators#client-generators) page.
- [MSW](https://mswjs.io) for generate the API Mock.
- [msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock) for generate random mock data from OpenAPI descriptions for MSW.
- [faker](https://github.com/faker-js/faker) for generate massive amounts of fake (but realistic) data for testing and development.

## Generate the API Client

For generate the API Client, first you need to install [Docker](https://docs.docker.com/get-docker/).

Then, run the following command:

```shell
docker run --rm \
    -v $PWD:/local openapitools/openapi-generator-cli generate \
    -i /local/petstore.yaml \
    -g typescript-fetch \
    -o /local/api
```

## Generate the API Mock

We use [msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock) to generate random mock data from OpenAPI descriptions for [MSW](https://mswjs.io).

- You must specify the OpenAPI file path.
- You must specify the output file path.
- You must specify the base URL of the API.

```shell
npx msw-auto-mock petstore.yaml -o ./mock.js --base-url http://petstore.swagger.io/v2
```

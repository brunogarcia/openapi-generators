# Research OpenAPI for auto-generating API Client and API Mock

## Description

- The main goal of this project is to auto-generate an API Client, an API Mock, and a Bruno Collection. All of them generating from the same Open API definition.
- The definition was copied from the [Open API Petstore](https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml) project.
- I've created a simple demo to check if the generated code works. And it works! 😀

## App Architecture 

![App Architecture](app-architecture.png)

## What is OpenAPI?

> Originally known as the Swagger Specification, the OpenAPI Specification (OAS) is a format that can be used to describe, produce, consume, and visualize RESTful web services. It's a specification standard for REST APIs that defines the structure and syntax.

Source: [What is OpenAPI?](https://nonamesecurity.com/learn-what-is-openapi)

## What is a API Client?

> An API client is a set of tools and protocols that operate from an application on a computer. They help you to bypass some operations when developing a web application rather than reinventing the wheel every time. Using a client API is a great way to speed up the development process.

Source: [What is Client in API Terms?](https://rapidapi.com/blog/api-glossary/client/)

## What is a API Mock?

> Mock APIs are used to simulate actual APIs where you can generate requests with custom data and get realistic responses the actual API would return. It is a fast and easy way of testing your REST API even before it goes live.

Source: [API Mocking - Everything You Need To Know](https://www.gravitee.io/blog/api-mocking-guide)

## Tools
- [Bruno](https://www.usebruno.com/) stores your collections directly in a folder on your filesystem. We use a plain text markup language, Bru, to save information about API requests.
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
npm run generate:mock
```

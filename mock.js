/**
 * This file is AUTO GENERATED by [msw-auto-mock](https://github.com/zoubingwu/msw-auto-mock)
 * Feel free to commit/edit it as you need.
 */
/* eslint-disable */
/* tslint:disable */
import { setupWorker, rest } from "msw";
import { faker } from "@faker-js/faker";

faker.seed(1);

const baseURL = "http://petstore.swagger.io/v2";
const MAX_ARRAY_LENGTH = 20;

let i = 0;
const next = () => {
  if (i === Number.MAX_SAFE_INTEGER - 1) {
    i = 0;
  }
  return i++;
};

export const handlers = [
  rest.post(`${baseURL}/pet`, (_, res, ctx) => {
    const resultArray = [[ctx.status(200), ctx.json(getAddPet200Response())]];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.put(`${baseURL}/pet`, (_, res, ctx) => {
    const resultArray = [
      [ctx.status(200), ctx.json(getUpdatePet200Response())],
    ];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.get(`${baseURL}/pet/findByStatus`, (_, res, ctx) => {
    const resultArray = [
      [ctx.status(200), ctx.json(getFindPetsByStatus200Response())],
    ];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.get(`${baseURL}/pet/findByTags`, (_, res, ctx) => {
    const resultArray = [
      [ctx.status(200), ctx.json(getFindPetsByTags200Response())],
    ];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.get(`${baseURL}/pet/:petId`, (_, res, ctx) => {
    const resultArray = [
      [ctx.status(200), ctx.json(getGetPetById200Response())],
    ];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.post(`${baseURL}/pet/:petId`, (_, res, ctx) => {
    const resultArray = [];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.delete(`${baseURL}/pet/:petId`, (_, res, ctx) => {
    const resultArray = [];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.post(`${baseURL}/pet/:petId/uploadImage`, (_, res, ctx) => {
    const resultArray = [
      [ctx.status(200), ctx.json(getUploadFile200Response())],
    ];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.get(`${baseURL}/store/inventory`, (_, res, ctx) => {
    const resultArray = [
      [ctx.status(200), ctx.json(getGetInventory200Response())],
    ];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.post(`${baseURL}/store/order`, (_, res, ctx) => {
    const resultArray = [
      [ctx.status(200), ctx.json(getPlaceOrder200Response())],
    ];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.get(`${baseURL}/store/order/:orderId`, (_, res, ctx) => {
    const resultArray = [
      [ctx.status(200), ctx.json(getGetOrderById200Response())],
    ];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.delete(`${baseURL}/store/order/:orderId`, (_, res, ctx) => {
    const resultArray = [];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.post(`${baseURL}/user`, (_, res, ctx) => {
    const resultArray = [];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.post(`${baseURL}/user/createWithArray`, (_, res, ctx) => {
    const resultArray = [];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.post(`${baseURL}/user/createWithList`, (_, res, ctx) => {
    const resultArray = [];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.get(`${baseURL}/user/login`, (_, res, ctx) => {
    const resultArray = [
      [ctx.status(200), ctx.json(getLoginUser200Response())],
    ];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.get(`${baseURL}/user/logout`, (_, res, ctx) => {
    const resultArray = [];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.get(`${baseURL}/user/:username`, (_, res, ctx) => {
    const resultArray = [
      [ctx.status(200), ctx.json(getGetUserByName200Response())],
    ];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.put(`${baseURL}/user/:username`, (_, res, ctx) => {
    const resultArray = [];

    return res(...resultArray[next() % resultArray.length]);
  }),
  rest.delete(`${baseURL}/user/:username`, (_, res, ctx) => {
    const resultArray = [];

    return res(...resultArray[next() % resultArray.length]);
  }),
];

export function getAddPet200Response() {
  return {
    id: faker.datatype.number(),
    category: {
      id: faker.datatype.number(),
      name: faker.name.fullName(),
    },
    name: "doggie",
    photoUrls: [
      ...new Array(
        faker.datatype.number({ min: 1, max: MAX_ARRAY_LENGTH })
      ).keys(),
    ].map((_) => faker.lorem.slug(1)),
    tags: [
      ...new Array(
        faker.datatype.number({ min: 1, max: MAX_ARRAY_LENGTH })
      ).keys(),
    ].map((_) => ({
      id: faker.datatype.number(),
      name: faker.name.fullName(),
    })),
    status: faker.helpers.arrayElement(["available", "pending", "sold"]),
  };
}

export function getUpdatePet200Response() {
  return {
    id: faker.datatype.number(),
    category: {
      id: faker.datatype.number(),
      name: faker.name.fullName(),
    },
    name: "doggie",
    photoUrls: [
      ...new Array(
        faker.datatype.number({ min: 1, max: MAX_ARRAY_LENGTH })
      ).keys(),
    ].map((_) => faker.lorem.slug(1)),
    tags: [
      ...new Array(
        faker.datatype.number({ min: 1, max: MAX_ARRAY_LENGTH })
      ).keys(),
    ].map((_) => ({
      id: faker.datatype.number(),
      name: faker.name.fullName(),
    })),
    status: faker.helpers.arrayElement(["available", "pending", "sold"]),
  };
}

export function getFindPetsByStatus200Response() {
  return [
    ...new Array(
      faker.datatype.number({ min: 1, max: MAX_ARRAY_LENGTH })
    ).keys(),
  ].map((_) => ({
    id: faker.datatype.number(),
    category: {
      id: faker.datatype.number(),
      name: faker.name.fullName(),
    },
    name: "doggie",
    photoUrls: [
      ...new Array(
        faker.datatype.number({ min: 1, max: MAX_ARRAY_LENGTH })
      ).keys(),
    ].map((_) => faker.lorem.slug(1)),
    tags: [
      ...new Array(
        faker.datatype.number({ min: 1, max: MAX_ARRAY_LENGTH })
      ).keys(),
    ].map((_) => ({
      id: faker.datatype.number(),
      name: faker.name.fullName(),
    })),
    status: faker.helpers.arrayElement(["available", "pending", "sold"]),
  }));
}

export function getFindPetsByTags200Response() {
  return [
    ...new Array(
      faker.datatype.number({ min: 1, max: MAX_ARRAY_LENGTH })
    ).keys(),
  ].map((_) => ({
    id: faker.datatype.number(),
    category: {
      id: faker.datatype.number(),
      name: faker.name.fullName(),
    },
    name: "doggie",
    photoUrls: [
      ...new Array(
        faker.datatype.number({ min: 1, max: MAX_ARRAY_LENGTH })
      ).keys(),
    ].map((_) => faker.lorem.slug(1)),
    tags: [
      ...new Array(
        faker.datatype.number({ min: 1, max: MAX_ARRAY_LENGTH })
      ).keys(),
    ].map((_) => ({
      id: faker.datatype.number(),
      name: faker.name.fullName(),
    })),
    status: faker.helpers.arrayElement(["available", "pending", "sold"]),
  }));
}

export function getGetPetById200Response() {
  return {
    id: faker.datatype.number(),
    category: {
      id: faker.datatype.number(),
      name: faker.name.fullName(),
    },
    name: "doggie",
    photoUrls: [
      ...new Array(
        faker.datatype.number({ min: 1, max: MAX_ARRAY_LENGTH })
      ).keys(),
    ].map((_) => faker.lorem.slug(1)),
    tags: [
      ...new Array(
        faker.datatype.number({ min: 1, max: MAX_ARRAY_LENGTH })
      ).keys(),
    ].map((_) => ({
      id: faker.datatype.number(),
      name: faker.name.fullName(),
    })),
    status: faker.helpers.arrayElement(["available", "pending", "sold"]),
  };
}

export function getUploadFile200Response() {
  return {
    code: faker.datatype.number(),
    type: faker.lorem.slug(1),
    message: faker.lorem.slug(1),
  };
}

export function getGetInventory200Response() {
  return [...new Array(5).keys()]
    .map((_) => ({ [faker.lorem.word()]: faker.datatype.number() }))
    .reduce((acc, next) => Object.assign(acc, next), {});
}

export function getPlaceOrder200Response() {
  return {
    id: faker.datatype.number(),
    petId: faker.datatype.number(),
    quantity: faker.datatype.number(),
    shipDate: faker.date.past(),
    status: faker.helpers.arrayElement(["placed", "approved", "delivered"]),
    complete: faker.datatype.boolean(),
  };
}

export function getGetOrderById200Response() {
  return {
    id: faker.datatype.number(),
    petId: faker.datatype.number(),
    quantity: faker.datatype.number(),
    shipDate: faker.date.past(),
    status: faker.helpers.arrayElement(["placed", "approved", "delivered"]),
    complete: faker.datatype.boolean(),
  };
}

export function getLoginUser200Response() {
  return faker.lorem.slug(1);
}

export function getGetUserByName200Response() {
  return {
    id: faker.datatype.number(),
    username: faker.name.fullName(),
    firstName: faker.name.fullName(),
    lastName: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.lorem.slug(1),
    phone: faker.lorem.slug(1),
    userStatus: faker.datatype.number(),
  };
}

// This configures a Service Worker with the given request handlers.
export const startWorker = () => {
  const worker = setupWorker(...handlers);
  worker.start();
};

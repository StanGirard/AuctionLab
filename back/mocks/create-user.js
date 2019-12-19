var faker = require('faker');

export const fakeBuyer = ()=> {
    return {
      statusCode: 200,
      body: JSON.stringify({
        email: faker.internet.email,
        type: "Acheteur",
        username: faker.name.firstName + " " + faker.name.lastName,
      }),
    };
  };

  export const fakeSeller = ()=> {
    return {
      statusCode: 200,
      body: JSON.stringify({
        email: faker.internet.email,
        type: "Vendeur",
        username: faker.name.firstName + " " + faker.name.lastName,
      }),
    };
  };


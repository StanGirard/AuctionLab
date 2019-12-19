import * as create from '../functions/user/create'
var createUserJson = require('../mocks/create-user.json');

test('Create User', async () => {
    const event = createUserJson;
  
    const context = 'context';
    const callback = (error, response) => {
      expect(response.statusCode).toEqual(200);
      expect(typeof response.body).toBe("string");
    };
  
    await create.main(event, context, callback);
  });
  
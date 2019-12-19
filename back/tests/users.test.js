import * as create from '../functions/user/create'
import {fakeBuyer, fakeSeller} from '../mocks/create-user'

test('Create Fake Buyer', async () => {
    const event = fakeBuyer();
  
    const context = 'context';
    const callback = (error, response) => {
      expect(response.statusCode).toEqual(200);
      expect(typeof response.body).toBe("string");
    };
  
    await create.main(event, context, callback);
  });
test('Create Fake Seller', async () => {
    const event = fakeSeller();
  
    const context = 'context';
    const callback = (error, response) => {
      expect(response.statusCode).toEqual(200);
      expect(typeof response.body).toBe("string");
    };
  
    await create.main(event, context, callback);
});
  
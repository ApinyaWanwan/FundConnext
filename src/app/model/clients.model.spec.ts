import { Clients } from './clients.model';

describe('Client', () => {
  describe('deserialize', () => {
    it('should return new client with id = 1 when have json response with id = 1', () => {
      const clientJson = createClientJson(1);

      const client = Clients.deserialize(clientJson);

      expect(client).toEqual(createClientInstance(1));
    });
  });
});

function createClientInstance(no: number) {
  const clientJson = createClientJson(no);
  const client = new Clients();
  client.id = clientJson.id;
  client.thaiFullname = clientJson.thaiFullname;

  return client;
}

function createClientJson(no: number) {
  const client = {
    id: no,
    thaiFullname: 'MOCK_NAME' + no
  };
  return client;
}

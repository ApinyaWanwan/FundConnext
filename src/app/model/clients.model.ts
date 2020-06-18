export class Clients {
  id: number;
  thaiFullname: string;

  static deserialize(input: any): Clients {
    const client = new Clients();
    Object.assign(client, input);
    return client;
  }
}

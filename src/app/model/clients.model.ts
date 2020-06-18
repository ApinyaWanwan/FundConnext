export class Clients {
  id: number;
  thaiFullName: string;

  static deserialize(input: any): Clients {
    const client = new Clients();
    Object.assign(client, input);
    return client;
  }
}

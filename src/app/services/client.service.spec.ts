import { ClientService } from './client.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Clients } from '../model/clients.model';

describe('ClientService', () => {
  let service: ClientService;
  let httpClient;

  beforeEach(() => {
    httpClient = new HttpClient(null);
    service = new ClientService(httpClient);
  });

  describe('getClients', () => {
    it('should sent http request to get clients', () => {
      spyOn(httpClient, 'get').and.returnValue(of());

      service.getClients();

      expect(httpClient.get).toHaveBeenCalled();
    });

    it('should return array of clients', () => {
      const client = Clients.deserialize({ id: 1 });
      spyOn(httpClient, 'get').and.returnValue(of([client]));

      service.getClients().subscribe(data => {
        expect(data[0]).toEqual(client);
      });
    });

  });

});

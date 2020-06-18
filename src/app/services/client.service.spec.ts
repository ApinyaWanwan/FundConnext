import { ClientService } from './client.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  });

});

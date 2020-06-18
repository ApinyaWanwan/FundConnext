import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Clients } from '../model/clients.model';
import { InvesterService } from './invester.service';

describe('InvesterService', () => {
  let service: InvesterService;
  let httpClient;

  beforeEach(() => {
    httpClient = new HttpClient(null);
    service = new InvesterService(httpClient);
  });

  describe('getDetails', () => {
    it('should sent http request to get invester details', () => {
      spyOn(httpClient, 'get').and.returnValue(of());

      service.getDetails();

      expect(httpClient.get).toHaveBeenCalled();
    });

  });

});

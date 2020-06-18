import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Clients } from '../model/clients.model';
import { InvesterService } from './invester.service';
import { Invester } from '../model/invester.model';

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

    it('should return array of invester details', () => {
      const invester = Invester.deserialize({ investor_id: 1 });
      spyOn(httpClient, 'get').and.returnValue(of([invester]));

      service.getDetails().subscribe(data => {
        expect(data[0]).toEqual(invester);
      });
    });
  });

});

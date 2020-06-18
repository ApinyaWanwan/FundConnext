import { ClientService } from '../services/client.service';
import { SearchClientComponent } from './search-client.component';
import { of } from 'rxjs';

describe('SearchClientComponent', () => {
  let component;
  let clientService;

  beforeEach(() => {
    clientService = new ClientService(null);
    component = new SearchClientComponent(clientService);
  });

  describe('getClients', () => {
    it('should call service get clients', () => {
      spyOn(clientService, 'getClients').and.returnValue(of());
      component.getClients();
      expect(clientService.getClients).toHaveBeenCalled();
    });
  });

});

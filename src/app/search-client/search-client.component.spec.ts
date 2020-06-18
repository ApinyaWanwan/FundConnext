import { ClientService } from '../services/client.service';
import { SearchClientComponent } from './search-client.component';
import { of } from 'rxjs';
import { Clients } from '../model/clients.model';

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

    it('should set clientList when call service get clients success', () => {
      const response = [Clients.deserialize({ id: 1 })];
      spyOn(clientService, 'getClients').and.returnValue(of(response));

      component.getClients();

      expect(component.clientList).toEqual(response);
    });

  });

});

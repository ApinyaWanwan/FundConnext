import { ClientService } from '../services/client.service';
import { SearchClientComponent } from './search-client.component';
import { of, throwError } from 'rxjs';
import { Clients } from '../model/clients.model';

describe('SearchClientComponent', () => {
  let component;
  let clientService;
  let router;

  beforeEach(() => {
    clientService = new ClientService(null);
    router =     router = jasmine.createSpyObj('Router', ['navigate']);
    component = new SearchClientComponent(clientService, router);
  });

  describe('ngOnInit', () => {
    it('should call getClients', () => {
      spyOn(component, 'getClients');
      component.ngOnInit();
      expect(component.getClients).toHaveBeenCalled();
    });
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

    it('should NOT set clientList when call service get clients failed', () => {
      const response = [Clients.deserialize({ id: 1 })];
      spyOn(clientService, 'getClients').and.returnValue(throwError({}));

      component.getClients();

      expect(component.clientList).not.toEqual(response);
    });
  });

  describe('onSearch', () => {
    it('should set filterClients to empty array when search term is empty string', () => {
      component.onSearch('');
      expect(component.filterClients).toEqual([]);
    });

    it('should set filterClients with clientList array[0] when search term contains client thaiFullname', () => {
      const searchTerm = 'MOCK_SEARCH_1';
      component.clientList = [
        Clients.deserialize({ id: 1, thaiFullname: 'MOCK_SEARCH_1' }),
        Clients.deserialize({ id: 2, thaiFullname: 'MOCK_SEARCH_2' })
      ];

      component.onSearch(searchTerm);

      expect(component.filterClients).toEqual([component.clientList[0]]);
    });
  });

  describe('redirectInverDetail', () => {
    it('should redirect to invester-detail', () => {
      const id = 110;

      component.redirectInverDetail(id);

      expect(router.navigate).toHaveBeenCalledWith(['/invester-detail'], jasmine.anything());
    });

    it('should redirect to invester-detail with state clientId', () => {
      const id = 110;

      component.redirectInverDetail(id);

      expect(router.navigate).toHaveBeenCalledWith(['/invester-detail'], {state: { clientId: id }});
    });
  });

});

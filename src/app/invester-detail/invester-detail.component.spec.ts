import { InvesterDetailComponent } from './invester-detail.component';
import { ActivatedRoute } from '@angular/router';
import { InvesterService } from '../services/invester.service';
import { of } from 'rxjs';
import { Invester } from '../model/invester.model';
import { async } from '@angular/core/testing';

describe('InvesterDetailComponent', () => {
  let component: InvesterDetailComponent;
  let investerService;
  let route: ActivatedRoute;

  beforeEach(() => {
    route = new ActivatedRoute();
    investerService = new InvesterService(null);
    component = new InvesterDetailComponent(route, investerService);
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      spyOn(component, 'getClientIdFromRoute').and.returnValue('MOCK_ID');
      spyOn(component, 'getDetails');
      spyOn(component, 'setInvesterById');
      spyOn(component, 'summaryTHB');
    });

    it('should set client id from route', async () => {
      await component.ngOnInit();
      expect(component.clientId).toBe('MOCK_ID');
    });

    it('should call getDetails', async () => {
      await component.ngOnInit();
      expect(component.getDetails).toHaveBeenCalled();
    });

    it('should call setInvesterById with investerList', async () => {
      component.investerList = [Invester.deserialize({ investor_id: 110 })];
      await component.ngOnInit();
      expect(component.setInvesterById).toHaveBeenCalledWith(component.investerList);
    });
  });

  describe('getDetails', () => {
    beforeEach(() => {
      spyOn(component, 'setInvesterById');
    });

    it('should call service get details', async () => {
      spyOn(investerService, 'getDetails').and.returnValue(of());

      await component.getDetails();

      expect(investerService.getDetails).toHaveBeenCalled();
    });

    it('should set investerList with response from service', async () => {
      const response = [Invester.deserialize({ investor_id: 110 })];
      spyOn(investerService, 'getDetails').and.returnValue(of(response));

      await component.getDetails();

      expect(component.investerList).toEqual(response);
    });
  });

  describe('setInvesterById', () => {
    it('should set filterInvester with array of investerList that have invester_id equale clientId', () => {
      const investerList = [Invester.deserialize({ investor_id: 110 }), Invester.deserialize({ investor_id: 111 })];
      const expected = [Invester.deserialize({ investor_id: 111 })];
      component.clientId = '111';

      component.setInvesterById(investerList);

      expect(component.filterInvester).toEqual(expected);
    });

    it('should NOT set filterInvester when invester_id not equale to clientId', () => {
      const investerList = [Invester.deserialize({ investor_id: 110 }), Invester.deserialize({ investor_id: 111 })];
      component.clientId = '113';

      component.setInvesterById(investerList);

      expect(component.filterInvester).not.toEqual(investerList);
    });
  });

});

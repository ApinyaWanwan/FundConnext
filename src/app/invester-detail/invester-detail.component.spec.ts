import { InvesterDetailComponent } from './invester-detail.component';
import { ActivatedRoute } from '@angular/router';
import { InvesterService } from '../services/invester.service';
import { of } from 'rxjs';
import { Invester } from '../model/invester.model';

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
    });

    it('should set client id from route', () => {
      component.ngOnInit();
      expect(component.clientId).toBe('MOCK_ID');
    });

    it('should call getDetails', () => {
      component.ngOnInit();
      expect(component.getDetails).toHaveBeenCalled();
    });
  });

  describe('getDetails', () => {
    beforeEach(() => {
      spyOn(component, 'setInvesterById');
    });

    it('should call service get details', () => {
      spyOn(investerService, 'getDetails').and.returnValue(of());

      component.getDetails();

      expect(investerService.getDetails).toHaveBeenCalled();
    });

    it('should set investerList with response from service', () => {
      const response = [Invester.deserialize({ investor_id: 110 })];
      spyOn(investerService, 'getDetails').and.returnValue(of(response));

      component.getDetails();

      expect(component.investerList).toEqual(response);
    });

    it('call setInvesterById with investerList', () => {
      const response = [Invester.deserialize({ investor_id: 110 })];
      spyOn(investerService, 'getDetails').and.returnValue(of(response));

      component.getDetails();

      expect(component.setInvesterById).toHaveBeenCalledWith(component.investerList);
    });
  });

  describe('setInvesterById', () => {
    it('should set filterInvester with array of investerList that have invester_id equle clientId', () => {
      const investerList = [Invester.deserialize({ investor_id: 110 }), Invester.deserialize({ investor_id: 111 })];
      component.clientId = '111';

      component.setInvesterById(investerList);

      expect(component.filterInvester).toEqual([investerList[1]]);
    });
  });

});

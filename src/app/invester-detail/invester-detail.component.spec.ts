import { InvesterDetailComponent } from './invester-detail.component';
import { ActivatedRoute } from '@angular/router';
import { InvesterService } from '../services/invester.service';
import { of } from 'rxjs';

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
    it('should call service get details', () => {
      spyOn(investerService, 'getDetails').and.returnValue(of());

      component.getDetails();

      expect(investerService.getDetails).toHaveBeenCalled();
    });
  });

});

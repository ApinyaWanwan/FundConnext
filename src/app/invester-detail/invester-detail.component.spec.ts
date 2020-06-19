import { InvesterDetailComponent } from './invester-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('InvesterDetailComponent', () => {
  let component: InvesterDetailComponent;
  let route: ActivatedRoute;
  let router;

  beforeEach(() => {
    route = new ActivatedRoute();
    router = jasmine.createSpyObj('Router', [ 'navigate', 'getCurrentNavigation' ]);
    component = new InvesterDetailComponent(route, router);
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

});

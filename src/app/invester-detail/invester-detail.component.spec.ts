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
    it('should set client id from route', () => {
      spyOn(component, 'getClientIdFromRoute').and.returnValue('MOCK_ID');

      component.ngOnInit();

      expect(component.clientId).toBe('MOCK_ID');
    });

  });

});

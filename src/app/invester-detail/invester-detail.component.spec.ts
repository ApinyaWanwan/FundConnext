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
    it('should call getExtras', () => {
      spyOn(component, 'getExtras');
      component.ngOnInit();
      expect(component.getExtras).toHaveBeenCalled();
    });
  });

  describe('getExtras', () => {
    it('should set field clientId with state extra clientId = 110', () => {
      route.queryParams = of({});
      const navigation = { extras: { state: { clientId: 110 } } };
      router.getCurrentNavigation.and.returnValue(navigation);

      component.getExtras();

      expect(component.clientId).toEqual(110);
    });
  });

});

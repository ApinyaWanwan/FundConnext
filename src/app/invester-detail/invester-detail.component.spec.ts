import { InvesterDetailComponent } from './invester-detail.component';

describe('InvesterDetailComponent', () => {
  let component;

  beforeEach(() => {
    component = new InvesterDetailComponent();
  });

  describe('ngOnInit', () => {
    it('should call getExtras', () => {
      spyOn(component, 'getExtras');
      component.ngOnInit();
      expect(component.getExtras).toHaveBeenCalled();
    });
  });

});

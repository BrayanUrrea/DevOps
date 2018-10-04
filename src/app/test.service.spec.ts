import { TestBed , inject} from '@angular/core/testing';
import { AppComponent } from './app.component';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('verificar que el servicio existe', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });

  /*it('should have add function',
  inject([TestService], (service: TestService) => {
    expect(service.add).toBeTruthy();
  }));*

  it('sumar',
  inject([TestService], (service: TestService) => {
    expect(service.add(1,2)).toEqual(3);
  }));*/

  it('verificar que existe la funcion operar',
  inject([TestService], (service: TestService) => {
    expect(service.operacion).toBeTruthy();
  }));

  it('deveria mostrar el numero romano correspondiente',
  inject([TestService], (service: TestService) => {
    expect(service.operacion(5)).toContain('V');
  }));

});

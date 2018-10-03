import { TestBed , inject} from '@angular/core/testing';
import { AppComponent } from './app.component';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });

  it('should have add function',
  inject([TestService], (service: TestService) => {
    expect(service.add).toBeTruthy();
  }));

  it('sumar',
  inject([TestService], (service: TestService) => {
    expect(service.add(1,2)).toEqual(3);
  }));

  it('v3',
  inject([TestService], (service: TestService) => {
    expect(service.operacion(5)).toContain('V');
  }));

});

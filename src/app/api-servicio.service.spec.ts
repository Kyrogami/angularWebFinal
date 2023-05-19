import { TestBed } from '@angular/core/testing';

import { ApiServicioService } from './api-servicio.service';

describe('ApiServicioService', () => {
  let service: ApiServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

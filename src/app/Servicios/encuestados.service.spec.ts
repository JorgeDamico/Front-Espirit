import { TestBed } from '@angular/core/testing';

import { EncuestadosService } from './encuestados.service';

describe('EncuestadosService', () => {
  let service: EncuestadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncuestadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

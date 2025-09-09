import { TestBed } from '@angular/core/testing';

import { GrupoPrivilegioService } from './grupo-privilegio.service';

describe('GrupoPrivilegioService', () => {
  let service: GrupoPrivilegioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoPrivilegioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

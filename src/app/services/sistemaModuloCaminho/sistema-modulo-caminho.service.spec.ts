import { TestBed } from '@angular/core/testing';

import { SistemaModuloCaminhoService } from './sistema-modulo-caminho.service';

describe('SistemaModuloCaminhoService', () => {
  let service: SistemaModuloCaminhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistemaModuloCaminhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

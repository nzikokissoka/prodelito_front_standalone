import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaModuloCaminhoComponent } from './sistema-modulo-caminho.component';

describe('SistemaModuloCaminhoComponent', () => {
  let component: SistemaModuloCaminhoComponent;
  let fixture: ComponentFixture<SistemaModuloCaminhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaModuloCaminhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SistemaModuloCaminhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolheSistemaComponent } from './escolhe-sistema.component';

describe('EscolheSistemaComponent', () => {
  let component: EscolheSistemaComponent;
  let fixture: ComponentFixture<EscolheSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EscolheSistemaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscolheSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

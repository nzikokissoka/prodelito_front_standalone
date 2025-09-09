import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloAppComponent } from './titulo-app.component';

describe('TituloAppComponent', () => {
  let component: TituloAppComponent;
  let fixture: ComponentFixture<TituloAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TituloAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

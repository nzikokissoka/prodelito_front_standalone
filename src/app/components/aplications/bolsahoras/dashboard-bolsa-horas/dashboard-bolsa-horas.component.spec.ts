import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBolsaHorasComponent } from './dashboard-bolsa-horas.component';

describe('DashboardBolsaHorasComponent', () => {
  let component: DashboardBolsaHorasComponent;
  let fixture: ComponentFixture<DashboardBolsaHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardBolsaHorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardBolsaHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

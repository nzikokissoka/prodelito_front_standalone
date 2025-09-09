import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConfiguralitoComponent } from './dashboard-configuralito.component';

describe('DashboardConfiguralitoComponent', () => {
  let component: DashboardConfiguralitoComponent;
  let fixture: ComponentFixture<DashboardConfiguralitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardConfiguralitoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardConfiguralitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

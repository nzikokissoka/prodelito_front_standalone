import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProdutividadeComponent } from './dashboard-produtividade.component';

describe('DashboardProdutividadeComponent', () => {
  let component: DashboardProdutividadeComponent;
  let fixture: ComponentFixture<DashboardProdutividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProdutividadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardProdutividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

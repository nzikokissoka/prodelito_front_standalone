import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoPrivilegioComponent } from './grupo-privilegio.component';

describe('GrupoPrivilegioComponent', () => {
  let component: GrupoPrivilegioComponent;
  let fixture: ComponentFixture<GrupoPrivilegioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrupoPrivilegioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrupoPrivilegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

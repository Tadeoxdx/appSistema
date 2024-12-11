import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizadoComponent } from './capitalizado.component';

describe('CapitalizadoComponent', () => {
  let component: CapitalizadoComponent;
  let fixture: ComponentFixture<CapitalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapitalizadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

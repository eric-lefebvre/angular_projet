import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonSimpleComponent } from './bouton-simple.component';

describe('BoutonSimpleComponent', () => {
  let component: BoutonSimpleComponent;
  let fixture: ComponentFixture<BoutonSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoutonSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

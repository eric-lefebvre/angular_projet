import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptionSimpleComponent } from './conception-simple.component';

describe('ConceptionSimpleComponent', () => {
  let component: ConceptionSimpleComponent;
  let fixture: ComponentFixture<ConceptionSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceptionSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptionSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

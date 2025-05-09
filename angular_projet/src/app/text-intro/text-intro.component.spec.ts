import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextIntroComponent } from './text-intro.component';

describe('TextIntroComponent', () => {
  let component: TextIntroComponent;
  let fixture: ComponentFixture<TextIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

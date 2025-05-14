import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptionDetailleeComponent } from './conception-detaillee.component';

describe('ConceptionDetailleeComponent', () => {
  let component: ConceptionDetailleeComponent;
  let fixture: ComponentFixture<ConceptionDetailleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConceptionDetailleeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptionDetailleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

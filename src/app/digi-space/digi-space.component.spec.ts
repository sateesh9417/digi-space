import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiSpaceComponent } from './digi-space.component';

describe('DigiSpaceComponent', () => {
  let component: DigiSpaceComponent;
  let fixture: ComponentFixture<DigiSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigiSpaceComponent]
    });
    fixture = TestBed.createComponent(DigiSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

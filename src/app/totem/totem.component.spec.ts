import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotemComponent } from './totem.component';

describe('TotemComponent', () => {
  let component: TotemComponent;
  let fixture: ComponentFixture<TotemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotemComponent]
    });
    fixture = TestBed.createComponent(TotemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

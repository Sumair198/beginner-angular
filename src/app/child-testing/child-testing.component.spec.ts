import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTestingComponent } from './child-testing.component';

describe('ChildTestingComponent', () => {
  let component: ChildTestingComponent;
  let fixture: ComponentFixture<ChildTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildTestingComponent]
    });
    fixture = TestBed.createComponent(ChildTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

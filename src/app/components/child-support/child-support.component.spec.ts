import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSupportComponent } from './child-support.component';

describe('ChildSupportComponent', () => {
  let component: ChildSupportComponent;
  let fixture: ComponentFixture<ChildSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

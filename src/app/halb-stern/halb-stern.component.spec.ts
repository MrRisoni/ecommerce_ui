import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalbSternComponent } from './halb-stern.component';

describe('HalbSternComponent', () => {
  let component: HalbSternComponent;
  let fixture: ComponentFixture<HalbSternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalbSternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalbSternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

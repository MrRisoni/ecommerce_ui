import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesPayRestrictComponent } from './rules-pay-restrict.component';

describe('RulesPayRestrictComponent', () => {
  let component: RulesPayRestrictComponent;
  let fixture: ComponentFixture<RulesPayRestrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesPayRestrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesPayRestrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

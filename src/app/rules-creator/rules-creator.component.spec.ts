import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesCreatorComponent } from './rules-creator.component';

describe('RulesCreatorComponent', () => {
  let component: RulesCreatorComponent;
  let fixture: ComponentFixture<RulesCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

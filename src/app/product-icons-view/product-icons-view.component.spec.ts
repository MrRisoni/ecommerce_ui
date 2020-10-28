import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIconsViewComponent } from './product-icons-view.component';

describe('ProductIconsViewComponent', () => {
  let component: ProductIconsViewComponent;
  let fixture: ComponentFixture<ProductIconsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductIconsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIconsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { products } from './products';

describe('Products', () => {
  let component: products;
  let fixture: ComponentFixture<products>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [products]
    })
    .compileComponents();

    fixture = TestBed.createComponent(products);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

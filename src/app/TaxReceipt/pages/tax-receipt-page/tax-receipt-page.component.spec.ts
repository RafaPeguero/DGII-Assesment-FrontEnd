import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxReceiptPageComponent } from './tax-receipt-page.component';

describe('TaxReceiptPageComponent', () => {
  let component: TaxReceiptPageComponent;
  let fixture: ComponentFixture<TaxReceiptPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxReceiptPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxReceiptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxReceiptComponent } from './tax-receipt.component';

describe('TaxReceiptComponent', () => {
  let component: TaxReceiptComponent;
  let fixture: ComponentFixture<TaxReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxReceiptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

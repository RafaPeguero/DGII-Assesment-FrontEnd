import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxReceiptDialogComponent } from './tax-receipt-dialog.component';

describe('TaxReceiptDialogComponent', () => {
  let component: TaxReceiptDialogComponent;
  let fixture: ComponentFixture<TaxReceiptDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxReceiptDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxReceiptDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

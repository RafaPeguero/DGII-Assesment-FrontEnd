import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxReceiptDialogComponent } from './tax-receipt-dialog.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material/material.module';
import { TaxreceiptTableComponent } from '../taxreceipt-table/taxreceipt-table.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from '../../../state/app.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { taxreceiptsMockData } from '../../../testing/TaxReceipt.mockData';
import { of } from 'rxjs';
import { AppSelectors } from '../../../state/app.selectors';

describe('TaxReceiptDialogComponent', () => {
  let component: TaxReceiptDialogComponent;
  let fixture: ComponentFixture<TaxReceiptDialogComponent>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<TaxReceiptDialogComponent>>;
  let mockStore: jasmine.SpyObj<Store>;
  let mockSelector: jasmine.SpyObj<AppSelectors>;
  const mockTaxReceipts = taxreceiptsMockData;
  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    mockStore = jasmine.createSpyObj('Store', ['select']);
    mockSelector = jasmine.createSpyObj('AppSelectors', ['getTaxReceiptsByTaxpayerId']);

    await TestBed.configureTestingModule({
      imports: [TaxReceiptDialogComponent, MaterialModule, TaxreceiptTableComponent, CommonModule,BrowserAnimationsModule, NgxsModule.forRoot([]),HttpClientTestingModule],
      providers: [
        {provide: MatDialogRef, useValue: mockDialogRef},
        {provide: MAT_DIALOG_DATA, useValue: { taxpayerId: 123 }},
        { provide: Store, useValue: mockStore },
    ]
    })
    .compileComponents();

    mockStore.select.and.returnValue(of(mockTaxReceipts));
    fixture = TestBed.createComponent(TaxReceiptDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive data through MAT_DIALOG_DATA', () => {
    expect(component.data).toEqual({ taxpayerId: 123 });
  });
  it('should subscribe to taxReceipts$ on ngOnInit', () => {
    component.ngOnInit();
    expect(component.taxReceipts).toBe(mockTaxReceipts);
  });

  it('should close the dialog on close()', () => {
    component.close();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should calculate the sum of itbis18 correctly', () => {
    component.taxReceipts = taxreceiptsMockData;

    const total = component.SumOfTaxReceipts;
    expect(total).toBe(360);
  });

  it('should unsubscribe onDestroy', () => {
    spyOn(component.destroyed$, 'next');
    spyOn(component.destroyed$, 'complete');

    component.ngOnDestroy();

    expect(component.destroyed$.next).toHaveBeenCalledWith(true);
    expect(component.destroyed$.complete).toHaveBeenCalled();
  });
});

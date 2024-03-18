import { TestBed } from '@angular/core/testing';

import { TaxReceiptService } from './tax-receipt.service';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from '../../state/app.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadTaxReceipts, LoadTaxReceiptsByTaxpayerId } from '../../state/app.actions';

describe('TaxReceiptService', () => {
  let service: TaxReceiptService;
  let mockStore: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([]), HttpClientTestingModule],
    });
    service = TestBed.inject(TaxReceiptService);
    mockStore = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('getTaxReceipts should dispatch LoadTaxReceipts action', () => {
    const dispatchSpy = spyOn(mockStore, 'dispatch');

    service.getTaxReceipts();

    expect(dispatchSpy).toHaveBeenCalledWith(new LoadTaxReceipts());
  });

  it('getTaxReceiptsByTaxpayerId should dispatch LoadTaxReceiptsByTaxpayerId action', () => {
    const dispatchSpy = spyOn(mockStore, 'dispatch');
    const taxpayerId = 12345;

    service.getTaxReceiptsByTaxpayerId(taxpayerId);

    expect(dispatchSpy).toHaveBeenCalledWith(new LoadTaxReceiptsByTaxpayerId(taxpayerId));
  });
});


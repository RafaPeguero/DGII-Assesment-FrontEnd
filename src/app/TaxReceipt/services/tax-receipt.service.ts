import { Injectable } from '@angular/core';
import { LoadTaxReceipts, LoadTaxReceiptsByTaxpayerId } from '../../state/app.actions';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class TaxReceiptService {

  constructor(private store: Store) { }

  public getTaxReceiptsByTaxpayerId(taxpayerId: number) { 
    this.store.dispatch(new LoadTaxReceiptsByTaxpayerId(taxpayerId));
  }

  public getTaxReceipts() { 
    this.store.dispatch(new LoadTaxReceipts());
  }
}

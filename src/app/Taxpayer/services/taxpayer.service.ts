import { Injectable } from '@angular/core';
import { LoadTaxPayers } from '../../state/app.actions';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class TaxpayerService {

  constructor(private store: Store) { }

  public getTaxpayers() {
    this.store.dispatch(new LoadTaxPayers());
  }

}

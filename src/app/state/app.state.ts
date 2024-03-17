import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { ITaxpayer } from '../models/taxpayer.model';
import { ITaxReceipt } from '../models/taxReceipt.model';
import { LoadTaxPayers, LoadTaxReceipts, LoadTaxReceiptsByTaxpayerId } from './app.actions';
import { HttpService } from '../services/http.service';
import { switchMap, take, tap } from 'rxjs';

export class AppStateModel {
    public taxpayers: ITaxpayer[] = [];
    public taxReceipts: ITaxReceipt[] = [];
    public taxReceiptsByTaxpayerId: ITaxReceipt[] = [];
}

const defaults = {
    taxpayers: [],
    taxReceipts: [],
    taxReceiptsByTaxpayerId: []
};

@State<AppStateModel>({
  name: 'app',
  defaults
})
@Injectable()
export class AppState {

    constructor(private httpRequest: HttpService) { }

  @Action(LoadTaxPayers)
  LoadTaxPayers({ patchState }: StateContext<AppStateModel>, { }: LoadTaxPayers) {
    return this.httpRequest.getTaxpayers().pipe(
        take(1),
        tap((taxpayers) => {
            patchState({
                taxpayers: taxpayers
            })
        })
    )
  }
  @Action(LoadTaxReceipts)
    LoadTaxReceipts({ patchState }: StateContext<AppStateModel>, {  }: LoadTaxReceipts) {
        return this.httpRequest.getTaxReceipts().pipe(
            take(1),
            tap((taxReceipts) => {
                patchState({
                    taxReceipts: taxReceipts
                })
            })
        )
    }

    @Action(LoadTaxReceiptsByTaxpayerId)
    LoadTaxReceiptsByTaxpayerId({ patchState }: StateContext<AppStateModel>, { taxpayerId }: LoadTaxReceiptsByTaxpayerId) {
        return this.httpRequest.getTaxReceiptsByTaxpayerId(taxpayerId).pipe(
            take(1),
            tap((taxReceipts) => {
                patchState({
                    taxReceiptsByTaxpayerId: taxReceipts
                })
            })
        )
    }
}

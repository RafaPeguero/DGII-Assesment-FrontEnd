import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { SearchInputComponent } from '../../../shared/search-input/search-input.component';
import { AppSelectors } from '../../../state/app.selectors';
import { ITaxReceipt } from '../../../models/taxReceipt.model';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { TaxreceiptTableComponent } from '../taxreceipt-table/taxreceipt-table.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tax-receipt',
  standalone: true,
  imports: [MaterialModule,SearchInputComponent, TaxreceiptTableComponent,RouterModule],
  templateUrl: './tax-receipt.component.html',
  styleUrl: './tax-receipt.component.scss'
})
export class TaxReceiptComponent {
  
  @Select(AppSelectors.getTaxReceipts) taxReceipt$!: Observable<ITaxReceipt[]>;
  taxReceipts: ITaxReceipt[] = [];
  filterValue: string = '';

  constructor() { }

  ngOnInit(): void {
    this.taxReceipt$.subscribe((taxReceipts) => {
      this.taxReceipts = taxReceipts;
    })
  }

  applyFilter(event: string) {
    this.filterValue = event;
  }
}

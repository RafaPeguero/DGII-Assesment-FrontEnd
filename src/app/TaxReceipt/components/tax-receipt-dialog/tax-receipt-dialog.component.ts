import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaxReceiptComponent } from '../tax-receipt/tax-receipt.component';
import { TaxReceiptService } from '../../services/tax-receipt.service';
import { Select } from '@ngxs/store';
import { AppSelectors } from '../../../state/app.selectors';
import { Observable } from 'rxjs';
import { ITaxReceipt } from '../../../models/taxReceipt.model';
import { TaxreceiptTableComponent } from '../taxreceipt-table/taxreceipt-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tax-receipt-dialog',
  standalone: true,
  imports: [MaterialModule, TaxreceiptTableComponent, CommonModule],
  templateUrl: './tax-receipt-dialog.component.html',
  styleUrl: './tax-receipt-dialog.component.scss'
})
export class TaxReceiptDialogComponent {
  
  @Select(AppSelectors.getTaxReceiptsByTaxpayerId) taxReceipts$!: Observable<ITaxReceipt[]>;
  taxReceipts: ITaxReceipt[] = [];

  constructor(public dialogRef: MatDialogRef<TaxReceiptDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit() {
      this.taxReceipts$.subscribe((taxreceipts) => {
        this.taxReceipts = taxreceipts;
      })
    }
    close(): void {
      this.dialogRef.close();
    }

    get SumOfTaxReceipts(): number {
      var total = 0;
      this.taxReceipts.map((taxReceipt) => { 
        total += taxReceipt.itbis18;
      })
      return total;
    }
}

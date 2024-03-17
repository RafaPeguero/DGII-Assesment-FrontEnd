import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { ITaxpayer } from '../../../models/taxpayer.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { TaxReceiptDialogComponent } from '../../../TaxReceipt/components/tax-receipt-dialog/tax-receipt-dialog.component';
import { TaxReceiptService } from '../../../TaxReceipt/services/tax-receipt.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-taxpayer-table',
  standalone: true,
  imports: [MaterialModule,TaxReceiptDialogComponent, CommonModule],
  templateUrl: './taxpayer-table.component.html',
  styleUrl: './taxpayer-table.component.scss'
})
export class TaxpayerTableComponent implements OnChanges {

  @Input() taxpayers!:ITaxpayer[];
  @Input() filterValue: string = '';

  dataSource!: MatTableDataSource<ITaxpayer>;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  displayedColumns: string[] = ['taxpayerId', 'name', 'type', 'status', 'action'];

  constructor(public dialog: MatDialog, private _taxReceiptService: TaxReceiptService) {}

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.taxpayers);
    this.dataSource.paginator = this.paginator!;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  openTaxReceipts(taxpayerId: number) {
    this._taxReceiptService.getTaxReceiptsByTaxpayerId(taxpayerId);
    this.dialog.open(TaxReceiptDialogComponent, {
      width: '800px',
      data: {taxpayerId: taxpayerId},
    });
  }
}

import { Component, Input, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { ITaxReceipt } from '../../../models/taxReceipt.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-taxreceipt-table',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './taxreceipt-table.component.html',
  styleUrl: './taxreceipt-table.component.scss'
})
export class TaxreceiptTableComponent {

  @Input() taxReceipts!:ITaxReceipt[];
  @Input() showTaxPayerId: boolean = true;
  @Input() filterValue: string = '';

  dataSource!: MatTableDataSource<ITaxReceipt>;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['taxPayerId','ncf', 'amount', 'itbis18'];

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.taxReceipts);
    this.dataSource.paginator = this.paginator!;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

}

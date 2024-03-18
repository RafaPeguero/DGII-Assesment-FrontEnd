import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxreceiptTableComponent } from './taxreceipt-table.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatTableDataSource } from '@angular/material/table';
import { ITaxReceipt } from '../../../models/taxReceipt.model';
import { MatPaginator } from '@angular/material/paginator';
import { taxreceiptsMockData } from '../../../testing/TaxReceipt.mockData';

describe('TaxreceiptTableComponent', () => {
  let component: TaxreceiptTableComponent;
  let fixture: ComponentFixture<TaxreceiptTableComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxreceiptTableComponent, MaterialModule, CommonModule,BrowserAnimationsModule,HttpClientTestingModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxreceiptTableComponent);
    component = fixture.componentInstance;

    component.taxReceipts= taxreceiptsMockData
    component.dataSource = new MatTableDataSource(taxreceiptsMockData);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should set the paginator on data source changes', () => {
    const paginator: MatPaginator | null | undefined = new MatTableDataSource<ITaxReceipt>().paginator;
    component.paginator = paginator!;
    component.taxReceipts = taxreceiptsMockData;
    fixture.detectChanges();
    expect(component.dataSource.paginator).toBe(paginator);
  });

  it('should apply filter on data source changes', () => {
    const filteredValue = 'E98';
    component.filterValue = filteredValue;
    component.taxReceipts = taxreceiptsMockData;
    component.ngOnChanges();
    fixture.detectChanges();
    expect(component.dataSource.filter).toBe(filteredValue.trim().toLowerCase());
  });

  it('should display correct columns', () => {
    expect(component.displayedColumns).toEqual(['taxPayerId', 'ncf', 'amount', 'itbis18']);
  });
});

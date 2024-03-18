import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxpayerTableComponent } from './taxpayer-table.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material/material.module';
import { TaxReceiptDialogComponent } from '../../../TaxReceipt/components/tax-receipt-dialog/tax-receipt-dialog.component';
import { NgxsModule } from '@ngxs/store';
import { AppState } from '../../../state/app.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TaxReceiptService } from '../../../TaxReceipt/services/tax-receipt.service';
import { taxpayersMockData } from '../../../testing/Taxpayer.mockData';
import { MatTableDataSource } from '@angular/material/table';

describe('TaxpayerTableComponent', () => {
  let component: TaxpayerTableComponent;
  let fixture: ComponentFixture<TaxpayerTableComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockTaxReceiptService: jasmine.SpyObj<TaxReceiptService>;


  beforeEach(async () => {
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
    mockTaxReceiptService = jasmine.createSpyObj('TaxReceiptService', ['getTaxReceiptsByTaxpayerId']);

    await TestBed.configureTestingModule({
      imports: [TaxpayerTableComponent, MaterialModule,TaxReceiptDialogComponent, CommonModule, NgxsModule.forRoot([AppState]),HttpClientTestingModule,BrowserAnimationsModule],
      providers: [
        { provide: MatDialog, useValue: mockDialog },
        { provide: TaxReceiptService, useValue: mockTaxReceiptService },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxpayerTableComponent);
    component = fixture.componentInstance;


    component.taxpayers= taxpayersMockData
    component.dataSource = new MatTableDataSource(taxpayersMockData);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set dataSource on ngOnChanges', () => {
    component.taxpayers = taxpayersMockData;
    fixture.detectChanges();

    expect(component.dataSource.data).toBe(taxpayersMockData);
  });

  it('should filter dataSource based on filterValue', () => {
    component.taxpayers = taxpayersMockData;
    component.filterValue = 'Juan';
    component.ngOnChanges();
    fixture.detectChanges();

    const filteredData = component.dataSource.filteredData;
    expect(filteredData).toEqual(taxpayersMockData.filter(taxpayer => taxpayer.name.toLowerCase().includes('juan')));
  });
});

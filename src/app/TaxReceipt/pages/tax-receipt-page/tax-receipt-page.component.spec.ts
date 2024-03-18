import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxReceiptPageComponent } from './tax-receipt-page.component';
import { NgxsModule } from '@ngxs/store';
import { AppState } from '../../../state/app.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TaxpayerPageComponent } from '../../../Taxpayer/pages/taxpayer-page/taxpayer-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaxReceiptService } from '../../services/tax-receipt.service';

describe('TaxReceiptPageComponent', () => {
  let component: TaxReceiptPageComponent;
  let fixture: ComponentFixture<TaxReceiptPageComponent>;
  let mockTaxReceiptService: jasmine.SpyObj<TaxReceiptService>;
  
  beforeEach(async () => {
    mockTaxReceiptService = jasmine.createSpyObj('TaxReceiptService', ['getTaxReceipts']);

    await TestBed.configureTestingModule({
      imports: [TaxReceiptPageComponent, NgxsModule.forRoot([AppState]),HttpClientTestingModule,BrowserAnimationsModule,
      RouterModule.forRoot(
        [{path: 'taxpayers', component: TaxpayerPageComponent}]
      )],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: new Map() } }
        },
        { provide: TaxReceiptService, useValue: mockTaxReceiptService }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxReceiptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getTaxReceipts on the service on ngOnInit', () => {
    expect(mockTaxReceiptService.getTaxReceipts).toHaveBeenCalled();
  });
});

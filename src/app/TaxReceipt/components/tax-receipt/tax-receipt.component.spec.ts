import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxReceiptComponent } from './tax-receipt.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../shared/material/material.module';
import { SearchInputComponent } from '../../../shared/search-input/search-input.component';
import { TaxreceiptTableComponent } from '../taxreceipt-table/taxreceipt-table.component';
import { TaxpayerPageComponent } from '../../../Taxpayer/pages/taxpayer-page/taxpayer-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from '../../../state/app.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { taxreceiptsMockData } from '../../../testing/TaxReceipt.mockData';
import { of } from 'rxjs';

describe('TaxReceiptComponent', () => {
  let component: TaxReceiptComponent;
  let fixture: ComponentFixture<TaxReceiptComponent>;
  let mockStore: jasmine.SpyObj<Store>;
  const mockTaxReceipts = taxreceiptsMockData;
  beforeEach(async () => {
    mockStore = jasmine.createSpyObj('Store', ['select']);

    await TestBed.configureTestingModule({
      imports: [TaxReceiptComponent,MaterialModule,SearchInputComponent, TaxreceiptTableComponent,BrowserAnimationsModule,NgxsModule.forRoot([]),HttpClientTestingModule,
        RouterModule.forRoot(
          [{path: 'taxpayers', component: TaxpayerPageComponent}]
        )],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: { snapshot: { paramMap: new Map() } },
          },
          { provide: Store, useValue: mockStore }
        ]
    })
    .compileComponents();
    mockStore.select.and.returnValue(of(mockTaxReceipts));
    fixture = TestBed.createComponent(TaxReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to taxReceipt$ on ngOnInit', () => {
    component.ngOnInit();

    expect(component.taxReceipts).toBe(mockTaxReceipts);
  });

  it('should update filterValue on applyFilter', () => {
    const newFilterValue = 'test filter';
    component.applyFilter(newFilterValue);

    expect(component.filterValue).toBe(newFilterValue);
  });

  it('should unsubscribe onDestroy', () => {
    spyOn(component.destroyed$, 'next');
    spyOn(component.destroyed$, 'complete');

    component.ngOnDestroy();

    expect(component.destroyed$.next).toHaveBeenCalledWith(true);
    expect(component.destroyed$.complete).toHaveBeenCalled();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxpayerComponent } from './taxpayer.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { SearchInputComponent } from '../../../shared/search-input/search-input.component';
import { TaxpayerTableComponent } from '../taxpayer-table/taxpayer-table.component';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from '../../../state/app.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TaxReceiptPageComponent } from '../../../TaxReceipt/pages/tax-receipt-page/tax-receipt-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { taxpayersMockData } from '../../../testing/Taxpayer.mockData';
import { of } from 'rxjs';
import { AppSelectors } from '../../../state/app.selectors';

describe('TaxpayerComponent', () => {
  let component: TaxpayerComponent;
  let fixture: ComponentFixture<TaxpayerComponent>;
  let mockStore: jasmine.SpyObj<Store>;

  beforeEach(async () => {
    mockStore = jasmine.createSpyObj('Store', ['select']);

    await TestBed.configureTestingModule({
      imports: [TaxpayerComponent,MaterialModule, SearchInputComponent, TaxpayerTableComponent,NgxsModule.forRoot([AppState]),HttpClientTestingModule,BrowserAnimationsModule,
      RouterModule.forRoot(
        [{path: 'tax-receipts', component: TaxReceiptPageComponent}]
      )],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: new Map() } }
        },
        { provide: Store, useValue: mockStore }
      ]
    })
    .compileComponents();
    mockStore.select.and.returnValue(of(taxpayersMockData));
    fixture = TestBed.createComponent(TaxpayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should subscribe to taxpayers$ on ngOnInit', () => {

    component.ngOnInit();
    expect(component.taxpayers).toBe(taxpayersMockData);
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

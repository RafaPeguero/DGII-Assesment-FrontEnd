import { TestBed } from '@angular/core/testing';

import { TaxpayerService } from './taxpayer.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from '../../state/app.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadTaxPayers } from '../../state/app.actions';

describe('TaxpayerService', () => {
  let service: TaxpayerService;
  let mockStore: jasmine.SpyObj<Store>;

  beforeEach(() => {
    mockStore = jasmine.createSpyObj('Store', ['dispatch']);
    TestBed.configureTestingModule({
      providers: [
        TaxpayerService,
        { provide: Store, useValue: mockStore }
      ],
      imports: [NgxsModule.forRoot([]),HttpClientTestingModule],
    });
    service = TestBed.inject(TaxpayerService);
  });

  it('getTaxpayers should dispatch LoadTaxPayers action', () => {
    service.getTaxpayers();

    expect(mockStore.dispatch).toHaveBeenCalledWith(new LoadTaxPayers());
  });
});

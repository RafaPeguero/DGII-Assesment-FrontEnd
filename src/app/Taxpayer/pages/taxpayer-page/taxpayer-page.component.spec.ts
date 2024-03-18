import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxpayerPageComponent } from './taxpayer-page.component';
import { NgxsModule } from '@ngxs/store';
import { AppState } from '../../../state/app.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaxpayerService } from '../../services/taxpayer.service';

describe('TaxpayerPageComponent', () => {
  let component: TaxpayerPageComponent;
  let fixture: ComponentFixture<TaxpayerPageComponent>;
  let mockTaxpayerService: jasmine.SpyObj<TaxpayerService>;

  beforeEach(async () => {
    mockTaxpayerService = jasmine.createSpyObj('TaxpayerService', ['getTaxpayers']);
    await TestBed.configureTestingModule({
      imports: [TaxpayerPageComponent, NgxsModule.forRoot([AppState]),HttpClientTestingModule,BrowserAnimationsModule,
      RouterModule.forRoot(
        [{path: 'tax-receipts', component: TaxpayerPageComponent}]
      )],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: new Map() } }
        },
        { provide: TaxpayerService, useValue: mockTaxpayerService }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxpayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getTaxpayers on the service on ngOnInit', () => {
    expect(mockTaxpayerService.getTaxpayers).toHaveBeenCalled();
  });
});

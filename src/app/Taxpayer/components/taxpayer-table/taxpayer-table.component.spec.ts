import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxpayerTableComponent } from './taxpayer-table.component';

describe('TaxpayerTableComponent', () => {
  let component: TaxpayerTableComponent;
  let fixture: ComponentFixture<TaxpayerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxpayerTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxpayerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

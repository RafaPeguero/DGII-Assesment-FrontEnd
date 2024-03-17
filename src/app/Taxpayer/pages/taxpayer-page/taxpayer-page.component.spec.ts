import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxpayerPageComponent } from './taxpayer-page.component';

describe('TaxpayerPageComponent', () => {
  let component: TaxpayerPageComponent;
  let fixture: ComponentFixture<TaxpayerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxpayerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxpayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

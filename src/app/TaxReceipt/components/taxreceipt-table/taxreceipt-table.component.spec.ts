import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxreceiptTableComponent } from './taxreceipt-table.component';

describe('TaxreceiptTableComponent', () => {
  let component: TaxreceiptTableComponent;
  let fixture: ComponentFixture<TaxreceiptTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxreceiptTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxreceiptTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

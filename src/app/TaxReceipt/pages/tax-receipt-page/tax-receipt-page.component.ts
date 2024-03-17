import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { TaxReceiptComponent } from '../../components/tax-receipt/tax-receipt.component';
import { TaxReceiptService } from '../../services/tax-receipt.service';

@Component({
  selector: 'app-tax-receipt-page',
  standalone: true,
  imports: [MaterialModule,TaxReceiptComponent],
  templateUrl: './tax-receipt-page.component.html',
  styleUrl: './tax-receipt-page.component.scss'
})
export class TaxReceiptPageComponent {

  constructor(private _taxReceiptService: TaxReceiptService) { }
  
  ngOnInit() {
    this._taxReceiptService.getTaxReceipts();
  }
}

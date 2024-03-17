import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { TaxpayerComponent } from '../../components/taxpayer/taxpayer.component';
import { TaxpayerService } from '../../services/taxpayer.service';

@Component({
  selector: 'app-taxpayer-page',
  standalone: true,
  imports: [TaxpayerComponent],
  templateUrl: './taxpayer-page.component.html',
  styleUrl: './taxpayer-page.component.scss'
})
export class TaxpayerPageComponent {

  constructor(private _taxpayerService: TaxpayerService) { }

  ngOnInit(): void {
    this._taxpayerService.getTaxpayers();
  }
}

import { Routes } from '@angular/router';
import { TaxReceiptPageComponent } from './TaxReceipt/pages/tax-receipt-page/tax-receipt-page.component';
import { TaxpayerPageComponent } from './Taxpayer/pages/taxpayer-page/taxpayer-page.component';



export const routes: Routes = [
    {
        path: 'taxpayer',
        component: TaxpayerPageComponent
    },
    {
        path: 'tax-receipt',
       component: TaxReceiptPageComponent
    },
    {
        path: '',
        redirectTo: 'taxpayer',
        pathMatch: 'full'
    }
];

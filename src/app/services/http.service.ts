import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { ITaxpayer } from '../models/taxpayer.model';
import { ITaxReceipt } from '../models/taxReceipt.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  getTaxpayers() {
    return this.http.get<ITaxpayer[]>(`${environment.apiUrl}/Taxpayer`);
  }

  getTaxReceipts() {
    return this.http.get<ITaxReceipt[]>(`${environment.apiUrl}/TaxReceipt`);
  }

  getTaxReceiptsByTaxpayerId(taxpayerId: number) { 
    return this.http.get<ITaxReceipt[]>(`${environment.apiUrl}/TaxReceipt/${taxpayerId}`);
  }
}

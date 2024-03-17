import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material/material.module';
import { SearchInputComponent } from '../../../shared/search-input/search-input.component';
import { Select } from '@ngxs/store';
import { AppSelectors } from '../../../state/app.selectors';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ITaxpayer } from '../../../models/taxpayer.model';
import { TaxpayerTableComponent } from '../taxpayer-table/taxpayer-table.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-taxpayer',
  standalone: true,
  imports: [MaterialModule, SearchInputComponent, TaxpayerTableComponent,RouterModule],
  templateUrl: './taxpayer.component.html',
  styleUrl: './taxpayer.component.scss'
})
export class TaxpayerComponent {

  @Select(AppSelectors.getTaxpayers) taxpayers$!: Observable<ITaxpayer[]>;
  taxpayers: ITaxpayer[] = [];
  filterValue: string = '';
  private destroyed$ = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.taxpayers$.pipe(takeUntil(this.destroyed$))
    .subscribe((taxpayers) => {
      this.taxpayers = taxpayers;
    })
  }

  applyFilter(event: string) {
    this.filterValue = event;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }


}

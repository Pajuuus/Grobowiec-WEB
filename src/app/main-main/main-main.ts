import { Component, inject } from '@angular/core';
import { SalesBanner } from '../sales-banner/sales-banner';
import { FormSelector } from '../forms/form-selector/form-selector';
import { ProductList } from '../product-list/product-list';
import { DaneService } from '../services/whenimechainasuma';
import { SaleList } from '../sale-list/sale-list';

@Component({
  imports: [SalesBanner, ProductList, FormSelector, SaleList],
  selector: 'main-main',
  styleUrl: './main-main.css',
  templateUrl: './main-main.html',
})
export class MainMain {
  daneService = inject(DaneService);

}

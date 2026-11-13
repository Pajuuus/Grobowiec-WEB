import { Component } from '@angular/core';
import { AddProd } from '../add-prod/add-prod';
import { FormsModule } from '@angular/forms';
import { RemoveProd } from '../remove-prod/remove-prod';
import { AddSale } from '../add-sale/add-sale';
import { RemoveSale } from '../remove-sale/remove-sale';

@Component({
  imports: [AddProd, RemoveProd, AddSale, RemoveSale, FormsModule],
  selector: 'form-selector',
  styleUrl: './form-selector.css',
  templateUrl: './form-selector.html',
})
export class FormSelector {
  selected_page = "";
}

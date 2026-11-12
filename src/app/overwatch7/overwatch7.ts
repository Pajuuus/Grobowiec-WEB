import { Component } from '@angular/core';
import { Overwatch6 } from '../overwatch6/overwatch6';
import { FormsModule } from '@angular/forms';
import { Overwatch8 } from '../overwatch8/overwatch8';
import { Overwatch9 } from '../overwatch9/overwatch9';
import { Overwatch10 } from '../overwatch10/overwatch10';

@Component({
  imports: [Overwatch6, Overwatch8, Overwatch9, Overwatch10, FormsModule],
  selector: 'overwatch7',
  styleUrl: './overwatch7.css',
  templateUrl: './overwatch7.html',
})
export class Overwatch7 {
  selected_page = "";
}

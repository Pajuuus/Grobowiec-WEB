import { Component } from '@angular/core';
import { Overwatch4 } from '../overwatch4/overwatch4';
import { Overwatch7 } from '../overwatch7/overwatch7';
import { Overwatch5 } from '../overwatch5/overwatch5';

@Component({
  imports: [Overwatch4, Overwatch5, Overwatch7],
  selector: 'overwatch3',
  styleUrl: './overwatch3.css',
  templateUrl: './overwatch3.html',
})
export class Overwatch3 {
  public overwatch_id = 7;
}

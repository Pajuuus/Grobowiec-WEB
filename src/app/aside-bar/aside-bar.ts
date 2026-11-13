import { Component, Inject, inject } from '@angular/core';
import { DaneService } from '../services/whenimechainasuma';
import { User } from '../services/user';
import { SupabaseService } from '../services/supabase';

@Component({
  imports: [],
  selector: 'aside-bar',
  styleUrl: './aside-bar.css',
  templateUrl: './aside-bar.html',
})
export class AsideBar {
  public daneService = inject(DaneService);
  private user = inject(User);
  private supabaseService = inject(SupabaseService);

  register = false;

  RegisterView() {
    if (this.register) {
      this.register = false;
    } else {
      this.register = true;
    }
  }

  Register(phone: number, username: string, name: string, surname: string, password: string) {
    this.supabaseService.insertTableData("user", {
      phone: phone,
      username: username,
      name: name,
      surname: surname,
      password: password
    })
  }

  Close(x: boolean) {
    this.daneService.asideBar.set(x);
  }

  Login(phone: number, password: string) {

  }

}

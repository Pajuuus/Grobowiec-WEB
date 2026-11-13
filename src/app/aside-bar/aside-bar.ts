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

  async Register(phone: any, username: string, name: string, surname: string, password: string) {
    if (String(phone).length == 9) {
      try {
        await this.supabaseService.insertTableData("users", {
          phone: phone,
          username: username,
          name: name,
          surname: surname,
          password: password
        });
      } catch (error) {
        alert("Twój numer telefonu jest już zajęty");
      }
    } else {
      alert("Twój numer telefonu nie istnieje");
    }
  }

  Close(x: boolean) {
    this.daneService.asideBar.set(x);
  }

  async Login(phone: any, password: any) {
    const dbuser = await this.supabaseService.load_user(phone, password);
    this.user.username = dbuser.username;
    this.user.points = dbuser.points;

  }

}

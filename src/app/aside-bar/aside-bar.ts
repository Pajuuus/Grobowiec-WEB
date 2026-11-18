import { Component, Inject, inject } from '@angular/core';
import { DaneService } from '../services/dane';
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
    if (!/[A-ZĄĆĘŁŃÓŚŹŻ]/.test(password)) { alert("Twoje hasło musi zawierać przynajmniej jedną dużą literę"); return;  }
    if (!/[!?@#$]/.test(password)) { alert("Twoje hasło musi zawierać przynajmniej jeden znak specjalny"); return;  }
    if (/012|123|234|345|456|567|678|789/.test(password)) { alert("Twoje hasło nie może zawierać ciągu trzech cyfr po kolei np. 123"); return;  }
    if (password.length <= 14) { alert("Twoje hasło jest za krótkie"); return; }

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
    this.user.phone.set(phone);
    this.user.username.set(dbuser.username);
    this.user.points.set(dbuser.points);
    this.user.password.set(password);
  }

  unlogin() {
    if (window.confirm("Czy na pewno chcesz się wylogować? Gorące oferty zniczy i trumien czekają w twojej okolicy!")) {
      window.alert("Do zobaczenia przy następnym pogrzebie! ;D");
      this.user.username.set("");
      this.user.points.set(0);
    } else {
      window.alert("Cieszymy się że z nami zostałeś. Zapraszamy na dział custom pogrzeb! :D");
    }
  }

  async DeleteUser() {
    const questionsArray = [
      "Czy na pewno chcesz usunąć konto?",
      "Czy jesteś absolutnie pewny, że chcesz usunąć konto?",
      "Czy na pewno chcesz trwale usunąć swoje konto?",
      "Czy na pewno chcesz kontynuować usuwanie konta?",
      "Czy jesteś pewien, że chcesz zamknąć swoje konto?",
      "Czy potwierdzasz chęć całkowitego usunięcia konta?",
      "Czy na pewno chcesz bezpowrotnie usunąć konto?",
      "Czy na pewno chcesz zrezygnować z konta i je usunąć?",
      "Czy naprawdę chcesz opuścić naszą platformę i usunąć konto?",
      "Czy jesteś pewny swojej decyzji o usunięciu konta?",
      "Czy na pewno chcesz usunąć swój profil z naszego serwisu?",
      "Czy potwierdzasz trwałe skasowanie swojego konta?",
      "Czy na pewno chcesz dezaktywować i usunąć swoje konto?",
      "Czy jesteś w 100% pewny, że chcesz usunąć konto?",
      "Czy na pewno chcesz pozbyć się swojego konta?",
      "Czy potwierdzasz chęć trwałego zamknięcia konta?",
      "Czy na pewno chcesz zlikwidować swoje konto?",
      "Czy na pewno chcesz usunąć konto wraz ze wszystkimi danymi?",
      "Czy jesteś pewien, że chcesz trwale skasować swój profil?",
      "Czy na pewno chcesz całkowicie zlikwidować swoje konto?",
      "Czy potwierdzasz decyzję o bezpowrotnym usunięciu konta?",
      "Czy na pewno chcesz skasować swoje konto użytkownika?",
      "Czy naprawdę chcesz usunąć swoje konto? Tej operacji nie można cofnąć.",
      "Czy jesteś pewny, że chcesz usunąć konto i utracić dostęp do danych?",
      "Czy na pewno chcesz trwale zamknąć swój profil?",
      "Czy potwierdzasz, że chcesz usunąć swoje konto na stałe?",
      "Czy na pewno chcesz zakończyć korzystanie z serwisu i usunąć konto?",
      "Czy jesteś całkowicie pewny, że chcesz usunąć swoje konto?",
      "Czy na pewno chcesz wykasować swoje konto z bazy danych?",
      "Czy na pewno chcesz zrezygnować z dalszego prowadzenia konta?",
      "Czy potwierdzasz chęć bezpowrotnego skasowania profilu?",
      "Czy na pewno chcesz usunąć konto? Wszystkie Twoje dane zostaną utracone.",
      "Czy jesteś pewien, że chcesz definitywnie usunąć swoje konto?",
      "Czy na pewno chcesz przystąpić do trwałego usunięcia konta?",
      "Czy na pewno chcesz skasować swój profil użytkownika?",
      "Czy potwierdzasz, że Twoją intencją jest usunięcie konta?",
      "Czy na pewno chcesz trwale zlikwidować swój profil?",
      "Czy jesteś pewny, że chcesz wyrejestrować się i usunąć konto?",
      "Czy na pewno chcesz bezpowrotnie zamknąć swoje konto?",
      "Czy naprawdę chcesz trwale usunąć swoje konto z systemu?",
      "Czy na pewno chcesz usunąć konto i wszystkie powiązane z nim pliki?",
      "Czy jesteś pewien, że chcesz dokonać trwałego usunięcia konta?",
      "Czy na pewno chcesz złożyć dyspozycję usunięcia konta?",
      "Czy potwierdzasz ostateczne usunięcie swojego konta?",
      "Czy na pewno chcesz usunąć swoje konto bez możliwości jego przywrócenia?",
      "Czy jesteś w pełni świadomy i pewny, że chcesz usunąć konto?",
      "Czy na pewno chcesz trwale wykasować swój profil?",
      "Czy na pewno chcesz usunąć konto? Spowoduje to utratę całej historii.",
      "Czy potwierdzasz chęć definitywnego zamknięcia konta?",
      "Czy na pewno chcesz usunąć swoje konto i zakończyć subskrypcję?"
    ];

    for (var x of questionsArray) {
      if (!window.confirm(x)) {
        return;
      }
    }

    this.supabaseService.delete_user(this.user.phone(), this.user.password());
    this.user.phone.set(0);
    this.user.username.set("");
    this.user.points.set(0);
    this.user.password.set("");
    alert("Þóµ←śłń→ę ↓ś↓ńęł→śµ← ßœóəę …óńßó")
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  footerString:string ="2023 My Portfolio";
  contacts: any[] = [];

  addContact(contact: any): void {
    this.contacts.push(contact);
  }
}

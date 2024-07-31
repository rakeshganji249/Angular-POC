// src/app/services/contact.service.ts
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}

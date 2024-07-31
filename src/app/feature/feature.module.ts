import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from '../components/contact/contact.component';
import { ContactListComponent } from '../components/contact-list/contact-list.component';

@NgModule({
  declarations: [
    ContactComponent,
    ContactListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactComponent,
    ContactListComponent
  ]
})
export class FeatureModule { }

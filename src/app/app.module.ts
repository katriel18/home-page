import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { TypographyComponent } from './typography/typography.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PruebasComponent } from './pruebas/pruebas.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TypographyComponent,
    ContactsComponent,
    AboutUsComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    MatToolbarModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

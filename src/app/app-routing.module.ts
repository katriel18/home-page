import { HomeComponent } from './home/home.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { TypographyComponent } from './typography/typography.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    component: PruebasComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }, 
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'typography',
    component: TypographyComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LembrasComponent } from './Interacao/lembras/lembras.component';
import { PagpComponent } from './Interacao/pagp/pagp.component';
import { MenuComponent } from './navegacao/menu/menu.component'


export const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full'},
  { path: 'menu', component: MenuComponent},
  { path: 'lembras', component: LembrasComponent},
  { path: 'Produtos', component: PagpComponent },
];


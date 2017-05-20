import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MatingPageComponent } from './mating-page/mating-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { CardComponent } from './card/card.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'profile/:id', component: ProfilePageComponent },
  { path: 'mate', component: MatingPageComponent },
  { path: 'create', component: CreatePageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

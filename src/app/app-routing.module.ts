import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from 'app/home-page/home-page.component';
import { ProfilePageComponent } from 'app/profile-page/profile-page.component';
import { MatingPageComponent } from 'app/mating-page/mating-page.component';
import { CreatePageComponent } from 'app/create-page/create-page.component';
import { CardComponent } from 'app/card/card.component';
import { NotFoundComponent } from 'app/not-found/not-found.component';
import { DocComponent } from 'app/doc/doc.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'profile/:id', component: ProfilePageComponent },
  { path: 'mate', component: MatingPageComponent },
  { path: 'create', component: CreatePageComponent },
  { path: 'documentation', component: DocComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

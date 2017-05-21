import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { UnicornService } from './unicorn.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MatingPageComponent } from './mating-page/mating-page.component';
import { CardComponent } from './card/card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { ReturnComponent } from './return/return.component';
import { GenderComponent } from './gender/gender.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfilePageComponent,
    MatingPageComponent,
    CardComponent,
    NotFoundComponent,
    CreatePageComponent,
    ReturnComponent,
    GenderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UnicornService],
  bootstrap: [AppComponent]
})
export class AppModule { }

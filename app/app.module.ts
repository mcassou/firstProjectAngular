import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { AccueilComponent } from './accueil.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             AppRoutingModule,
             HttpModule,
             InMemoryWebApiModule.forRoot(InMemoryDataService)
           ],
  declarations: [ AppComponent, 
                  AccueilComponent, 
                  HeroDetailComponent, 
                  HeroesComponent, 
                  DashboardComponent,
                  HeroSearchComponent
                ],
  bootstrap:    [ AppComponent ],
  providers: [ HeroService ]
})
export class AppModule { }
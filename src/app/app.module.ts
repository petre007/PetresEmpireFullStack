import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestsListComponent } from './components/guests-list/guests-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddGuestComponent } from './components/add-guest/add-guest.component';
import { FormsModule } from '@angular/forms';
import { HomePageChartComponent } from './components/home-page-chart/home-page-chart.component';
import { ChartsModule } from 'ng2-charts';
import { UpdateGuestComponent } from './components/update-guest/update-guest.component';




@NgModule({
  declarations: [
    AppComponent,
    GuestsListComponent,
    HomePageComponent,
    AddGuestComponent,
    HomePageChartComponent,
    UpdateGuestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

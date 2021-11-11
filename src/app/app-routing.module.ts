import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGuestComponent } from './components/add-guest/add-guest.component';
import { GuestsListComponent } from './components/guests-list/guests-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomePageChartComponent } from './components/home-page-chart/home-page-chart.component';
import { UpdateGuestService } from './services/update-guest.service';
import { UpdateGuestComponent } from './components/update-guest/update-guest.component';

const routes: Routes = [
  {path: 'guestlist', component:GuestsListComponent},
  {path: 'homePage', component:HomePageComponent},
  {path: 'addGuest', component:AddGuestComponent},
  {path: 'chart', component:HomePageChartComponent},
  {path: 'updateGuest', component:UpdateGuestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

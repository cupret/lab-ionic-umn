import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';

import {} from './offers/offers.module'

const routes: Routes = [
  {
    path: '',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        loadChildren: './discover/discover.module#DiscoverPageModule'
      },
      {
        path: 'offers',
        loadChildren: './offers/offers.module#OffersPageModule'
      },
      {
        path: '',
        redirectTo: 'discover',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlacesPage]
})
export class PlacesPageModule {}

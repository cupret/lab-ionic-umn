import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { GoogleMapComponent } from './../components/google-map/google-map.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  address: string = '';
  location: {
    latitude: number,
    longitude: number
  };

  constructor(
    private router: Router,
    public modalCtrl: ModalController
  ) { }

  onLogout() {
  }

  async presentGoogleMap() {
    const modal = await this.modalCtrl.create({
      component: GoogleMapComponent
    });

    modal.onDidDismiss().then((data)=>{
      if(data.data) {
        this.address = data.data.address;
        this.location = {
          latitude: data.data.lat,
          longitude: data.data.lng
        };
      };
    });

    await modal.present();
  }

}

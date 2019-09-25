import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'

import { UKMService } from './../services/ukm.service';
import { UKM } from './../services/ukm.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ukmList: UKM[] = [];

  constructor(public alertCtrl: AlertController ,private ukmService: UKMService) {
    this.ukmList = this.ukmService.getUKMList();
  }

  async joinUKM(id: string){
    const alert = await this.alertCtrl.create({
      header: "Beneran mau Join?",
      buttons: [
        {
          text: 'Batal'
        },
        {
          text: 'Join',
          handler: () => {
            this.ukmService.joinUKM(id);
          }
        }
      ]
    });
    alert.present();
  }
}

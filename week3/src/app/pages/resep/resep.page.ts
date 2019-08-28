import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';

import { DapurService } from './../../services/dapur.service'

@Component({
  selector: 'app-resep',
  templateUrl: './resep.page.html',
  styleUrls: ['./resep.page.scss'],
})
export class ResepPage implements OnInit {

  resepList: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController, private dapur: DapurService) { }

  ngOnInit() {
    this.resepList = this.dapur.getResepList();
  }

  detail(id:string){
    console.log(this.dapur.getResep(id));

    this.navCtrl.navigateForward('resep/'+id)
  }

  async presentAlert(title:string, message:string, button:any = ['OK']) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: button
    });
    alert.present();
  }

  async presentToast(message:string, duration: number){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration
    });
    toast.present();
  }

  delete(id:string){
    let buttons =[
      {
        text: 'No'
      },
      {
        text: 'Yes',
        handler: () => {
          this.dapur.deleteresep(id);
          this.resepList = this.dapur.getResepList();
          this.presentToast("Recipe has been deleted", 2000);
        }
      }
    ];
    this.presentAlert("Delete Recipe", "Are you sure want to delete this recipe?", buttons);
  }

}

import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, LoadingController, ActionSheetController} from '@ionic/angular';

import { PlaceService } from './../../services/place.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  
  place: any; 

  constructor(public navParams: NavParams, public modalCtrl: ModalController, public loadCtrl: LoadingController, private placeService: PlaceService, public asCtrl: ActionSheetController) {
    this.place = navParams.get('place');

  }

  ngOnInit() {}

  async bookNow(){
    const actionSheet = await this.asCtrl.create({
      header: 'Booking Places',
      buttons: [{
        text: 'Book /w random date',
        handler: () => {
          this.loadCtrl.create({
            message: "booking"
          }).then((loading)=>{
            loading.present();
            this.placeService.bookPlace(this.place.id);
            loading.dismiss();
            this.closeModal();
          })
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {}
      }]
    });

    await actionSheet.present();

    
  }

  async closeModal(){
    await this.modalCtrl.dismiss();
  }

}

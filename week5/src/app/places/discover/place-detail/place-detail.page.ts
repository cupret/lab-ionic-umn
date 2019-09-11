import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { PlaceService } from './../../../services/place.service';
import { Place } from './../../../places/place.model';

import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(public modalCtrl: ModalController, private activatedRoute: ActivatedRoute, private placeService: PlaceService) {
    let id: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.place = this.placeService.getPlace(id);
  }

  ngOnInit() {
    
  }

  async book(){
    const modal = await this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {
        'place': this.place
      }
    });
    await modal.present();
  }

}

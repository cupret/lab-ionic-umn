import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { PlaceService } from './../../../services/place.service';
import { Place } from './../../../places/place.model';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place;

  constructor(public navCtrl: NavController, private activatedRoute: ActivatedRoute, private placeService: PlaceService) {
    let id: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.place = this.placeService.getPlace(id);
  }

  ngOnInit() {
  }

  goToEdit(){
    this.navCtrl.navigateForward('places/offers/edit/'+this.place.id)
  }

}

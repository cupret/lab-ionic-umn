import { Component, OnInit } from '@angular/core';

import { PlaceService } from './../../services/place.service';
import { Place } from './../../places/place.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  places: Place[];

  constructor(public navCtrl: NavController, private placeService: PlaceService) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces();
  }
  
  placeDetail(id: string){
    this.navCtrl.navigateForward('places/offers/'+id)
  }
}

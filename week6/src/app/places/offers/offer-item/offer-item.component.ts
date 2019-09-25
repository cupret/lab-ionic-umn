import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

import { PlaceService } from './../../../services/place.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent implements OnInit {

  @Input() place: Place;

  constructor(public navCtrl: NavController, private placeService: PlaceService) {
  } 

  ngOnInit() {}

  placeDetail(id: string){
    this.navCtrl.navigateForward('places/offers/'+id)
  }

  editPlace(id: string){
    this.navCtrl.navigateForward('places/offers/edit/'+id)
  }

  getDate(dateStr: string){
    let date = dateStr ? new Date(dateStr) : new Date();
    return date.toLocaleDateString();
  }

}

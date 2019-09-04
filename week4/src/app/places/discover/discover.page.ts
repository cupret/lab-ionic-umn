import { Component, OnInit } from '@angular/core';

import { PlaceService } from './../../services/place.service';
import { Place } from './../../places/place.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  places: Place[];

  constructor(public navCtrl: NavController, private placeService: PlaceService){
    this.places = this.placeService.getPlaces();
  }

  ngOnInit() {
  }

  placeDetail(id: string){
    this.navCtrl.navigateForward('places/discover/'+id)
  }
}

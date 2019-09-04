import { Injectable } from '@angular/core';

import { Place } from './../places/place.model'

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private places: Place[] =[
    new Place(
      "id1",
      "Title1",
      "desc1",
      "https://s3.amazonaws.com/media.sandmanhotels.com/SPH/VAN/sut-lgr-l2d-06-900x600.jpg",
      123456789
    ),
    new Place(
      "id2",
      "Title2",
      "desc2",
      "https://s3.amazonaws.com/media.sandmanhotels.com/SPH/VAN/sut-lgr-l2d-06-900x600.jpg",
      123456789123456789
    )
  ];
  
  constructor() {
    
  }

  getPlaces(){
    return this.places;
  }

  getPlace(id: string){
    let idx = this.places.findIndex((place)=>{
      return place.id === id;
    });
    if(idx>=0) return this.places[idx];
    else return null;
  }

}

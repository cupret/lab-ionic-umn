import { Injectable } from '@angular/core';

import { Place } from './../places/place.model'
import { Booking } from './../bookings/booking.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  coba_id: number = 2;

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

  private bookings: Booking[] = [
    new Booking("1", "id1", "Title1", "user", 10),
    new Booking("2", "id2", "Title2", "user", 30)
  ];
  
  constructor() {
    
  }

  bookPlace(id: string){
    this.coba_id++;
    this.bookings.push({
      id: this.coba_id+" user",
      place_id: this.getPlace(id).id,
      place_title: this.getPlace(id).title,
      user_id: "user",
      guest_number: this.coba_id
    });
  }

  deleteBook(id:string){
    let idx = this.bookings.findIndex((booking)=>{
      return booking.id === id;
    });
    if(idx>=0) {
      this.bookings.splice(idx, 1);
    }
  }

  getBookings(){
    return this.bookings;
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

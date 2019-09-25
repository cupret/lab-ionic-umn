import { Component, OnInit } from '@angular/core';

import { PlaceService } from './../services/place.service';
import { Booking } from './../bookings/booking.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  bookings: Booking[];

  constructor(public navCtrl: NavController, private placeService: PlaceService) { }

  ngOnInit() {
    this.bookings = this.placeService.getBookings();
  }

  deleteBooking(id: string){
    console.log("ss");
    this.placeService.deleteBook(id);
    this.bookings = this.placeService.getBookings();
  }

  placeDetail(id: string){
    this.navCtrl.navigateForward('places/discover/'+id)
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../booking.model';

@Component({
  selector: 'app-booking-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.scss'],
})
export class BookingItemComponent implements OnInit {

  @Input() booking: Booking;
  
  constructor() { }

  ngOnInit() {}

}

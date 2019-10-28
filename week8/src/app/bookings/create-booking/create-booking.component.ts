import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random';

  dateStart: string;
  dateEnd: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    const availableFrom = new Date(this.selectedPlace.DateStart);
    const availableTo = new Date(this.selectedPlace.DateEnd);
    if(this.selectedMode == "random"){
      this.dateStart = new Date(availableFrom.getTime() + Math.random() * (availableTo.getTime())).toISOString();
      this.dateEnd = new Date(new Date(this.dateStart).getTime() + Math.random() * (new Date(this.dateStart).getTime() + 6*24*60*60*100 - new Date(this.dateStart).getTime())).toISOString();
    }

  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalCtrl.dismiss({message: 'This is a dummy message!'}, 'confirm');
  }

}

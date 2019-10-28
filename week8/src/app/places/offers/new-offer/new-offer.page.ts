import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form: FormGroup;

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      desc: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.maxLength(180)]
      }),      
      price: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.min(1)]
      }),      
      dateStart: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),      
      dateEnd: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
    })
  }

  addPlace(){

  }

}

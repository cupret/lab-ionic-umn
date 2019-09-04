import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlaceService } from './../../../services/place.service';
import { Place } from './../../../places/place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private activatedRoute: ActivatedRoute, private placeService: PlaceService) {
    let id: string = this.activatedRoute.snapshot.paramMap.get('id');
    this.place = this.placeService.getPlace(id);
  }

  ngOnInit() {
  }

}

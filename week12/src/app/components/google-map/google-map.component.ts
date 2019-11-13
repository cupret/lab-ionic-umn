import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {

  @ViewChild('map_search', null) map_search:any;
  @ViewChild('map_canvas', null) map_canvas:any;
  map: any;
  service: any;
  searchBox: any;
  marker: any;

  selectAddress: string;
  selectLocation: any;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this.initMap();
  }

  async closeModal(bol = false){
    if(bol && this.selectAddress && this.selectLocation) await this.modalCtrl.dismiss({
      address: this.selectAddress,
      lat: this.selectLocation.lat(),
      lng: this.selectLocation.lng()
    });
    else await this.modalCtrl.dismiss();
  }

  initMap() {

    let posLatLng = new google.maps.LatLng(-6.2565817, 106.6183327);
    let mapOptions = {
      center: posLatLng,
      zoom: 20,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      // mapTypeControl: false,
      // streetViewControl: false,
      // fullscreenControl: false
    }

    this.map = new google.maps.Map(this.map_canvas.nativeElement, mapOptions);
    this.service = new google.maps.places.PlacesService(this.map);

    this.searchBox = new google.maps.places.SearchBox(this.map_search.nativeElement);
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(this.map_search.nativeElement);

    this.searchBox.addListener('places_changed', ()=>{
      let places = this.searchBox.getPlaces();
      if (places.length == 0) {
        return;
      } else {
        let pos = places[0].geometry.location;
        this.map.setCenter(pos);
        this.marker.setPosition(pos);
        console.log(pos.lat()+" "+pos.lng());
        this.selectAddress = places[0].formatted_address;
        this.selectLocation = pos;
      }
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      position: this.map.getCenter(),
      draggable: true
    });

    google.maps.event.addListener(this.marker, 'dragend', ()=>{
      this.map.setCenter(this.marker.getPosition());
      let pos = this.marker.getPosition();
      console.log(pos.lat()+" "+pos.lng());
      this.service.textSearch({location: pos,radius: '500',type: ['establishment']}, (results, status)=> this.setAddress(results, status));
    });

    google.maps.event.addListener(this.map, 'drag', ()=>{
      this.marker.setPosition(this.map.getCenter());
    });

    google.maps.event.addListener(this.map, 'dragend', ()=>{
      let pos = this.map.getCenter();
      console.log(pos.lat()+" "+pos.lng());
      this.service.textSearch({location: pos,radius: '500',type: ['establishment']}, (results, status)=> this.setAddress(results, status));
    });

  }

  setAddress(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      this.selectAddress = results[0].formatted_address;
      this.selectLocation = results[0].geometry.location;
    }
  }

  async select(){
    if(this.selectAddress && this.selectLocation) await this.modalCtrl.dismiss({
      address: this.selectAddress,
      lat: this.selectLocation.lat(),
      lng: this.selectLocation.lng()
    });
    else await this.modalCtrl.dismiss();
  }

}

import { Component, OnInit } from '@angular/core';

import { UKMService } from './../services/ukm.service';
import { UKM } from './../services/ukm.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  ukmList: UKM[] = [];

  constructor(private ukmService: UKMService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.ukmList = this.ukmService.getUKMJoinList();
  }

  exitUKM(id: string){
    this.ukmService.exitUKM(id);
    this.ukmList = this.ukmService.getUKMJoinList();
  }

}

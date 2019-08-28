import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { DapurService } from './../../services/dapur.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  
  id:string;
  resep:any

  constructor(public navCtrl: NavController, private activatedRoute: ActivatedRoute, private dapur: DapurService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.resep = this.dapur.getResep(this.id);
  }

  ngOnInit() {
  }

  delete(){
    this.dapur.deleteresep(this.id);
    this.navCtrl.navigateBack('resep');
  }

}

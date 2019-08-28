import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { DapurService } from './../../services/dapur.service'

@Component({
  selector: 'app-resep',
  templateUrl: './resep.page.html',
  styleUrls: ['./resep.page.scss'],
})
export class ResepPage implements OnInit {

  resepList: any;

  constructor(public navCtrl: NavController, private dapur: DapurService) { }

  ngOnInit() {
    this.resepList = this.dapur.getResepList();
  }

  detail(id:string){
    console.log(this.dapur.getResep(id));
    this.navCtrl.navigateForward('resep/'+id)
  }

  delete(id:string){
    this.dapur.deleteresep(id);
    this.resepList = this.dapur.getResepList();
  }

}

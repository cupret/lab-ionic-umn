import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DapurService } from './../../services/dapur.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  
  resep:any

  constructor(private activatedRoute: ActivatedRoute, private dapur: DapurService) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.resep = this.dapur.getResep(id);
  }

  ngOnInit() {
  }

}

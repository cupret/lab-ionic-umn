import { Injectable } from '@angular/core';
import { UKM } from './ukm.model';

@Injectable({
  providedIn: 'root'
})
export class UKMService {

  UKMList: UKM[] = [
    {
      id: "ukm1",
      title: "Basket",
      desc: "Basket adalah UKM blabla bla..."
    },
    {
      id: "ukm2",
      title: "Drama",
      desc: "Drama adalah UKM blabla bla..."
    },
    {
      id: "ukm3",
      title: "Volly",
      desc: "Volly adalah UKM blabla bla..."
    },
    {
      id: "ukm4",
      title: "Futsal",
      desc: "Futsal adalah UKM blabla bla..."
    }
    ,
    {
      id: "ukm5",
      title: "Paduan Suara",
      desc: "Paduan Suara adalah UKM blabla bla..."
    }
  ];

  joinList: string[] = [];

  constructor() {}

  getUKMList(): UKM[]{
    return this.UKMList;
  }

  getUKMJoinList(): UKM[]{
    let UKMJoinList: UKM[] = [];
    this.UKMList.forEach((data)=>{
      this.joinList.forEach((id)=>{
        if(id == data.id) UKMJoinList.push(data);
      });
    });
    return UKMJoinList;
  }

  joinUKM(id: string): boolean{
    let idx = this.joinList.findIndex((data)=>{
      return (data == id);
    });
    if(idx < 0){
      this.joinList.push(id);
      return true;
    } else {
      return false;
    }
  }

  exitUKM(id: string): boolean{
    let idx = this.joinList.findIndex((data)=>{
      return (data == id);
    });
    if(idx >= 0){
      this.joinList.splice(idx, 1);
      return true;
    } else {
      return false;
    }
  }

}

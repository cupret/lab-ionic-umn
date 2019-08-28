import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DapurService {

  resepList:any = [
    {
      id: "m1",
      title: "Makanan1",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmTHuVlfdvH-7ZFnxxlzvp2_NNqAecniL-D80FD3Hpf4Ti3Ptb",
      ingredients: [
        "Bahan1 Makananan",
        "Bahan2 Makananan",
        "Bahan3 Makananan",
        "Bahan4 Makananan"
      ]
    },
    {
      id: "m2",
      title: "Minuman2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlSrFy3Zil2oDjuXhhFUe7uYDkqHotnedxDt9W6qp0ohCDw01b",
      ingredients: [
        "Bahan1 Minuman",
        "Bahan2 Minuman"
      ]
    }, 
    {
      id: "k3",
      title: "Kudapan3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgmw83M8KiXw5YWZTOK8xCReIIh991E5RAhompWCvAY6OER7CI",
      ingredients: [
        "Bahan1 Kudapan",
        "Bahan2 Kudapan",
        "Bahan3 Kudapan"
      ]
    }
  ]

  constructor() { }

  getResepList(){
    return this.resepList;
  }

  getResep(id:string){
    let idx = this.resepList.findIndex((data) => {
      return data.id === id
    });
    if(idx >= 0) return this.resepList[idx];
  }

  deleteresep(id:String){
    let idx = this.resepList.findIndex((data) => {
      return data.id === id;
    });
    if (idx >= 0) this.resepList.splice(idx, 1);
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {
  @Input() dataEntrante: any;
  dinos = [];


  ngOnInit() {
    
      fetch('./assets/inputFile/csvjson.json').then(res => res.json()).then(json =>{
        console.log('results',json);
        this.dinos = json;
      })
  }
  hola(dino:any){

    localStorage.setItem("id",dino.id)
    localStorage.setItem("name",dino.name)
    localStorage.setItem("type",dino.is_dino)
    localStorage.setItem("diet",dino.diet)
    localStorage.setItem("era", dino.era)
    localStorage.setItem("found",dino.found)
    localStorage.setItem("img", dino.img)
    localStorage.setItem('date', dino.date)
  }
}

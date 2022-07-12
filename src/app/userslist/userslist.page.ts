import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {
  @Input() dataEntrante: any;
  dinos = [];

  constructor() {}

  ngOnInit() {
    
      fetch('./assets/inputFile/csvjson.json').then(res => res.json()).then(json =>{
        console.log('results',json);
        this.dinos = json;
      })
  }
  hola(id,name,type,diet,era,found,img){
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("type",type)
    localStorage.setItem("diet",diet)
    localStorage.setItem("era", era)
    localStorage.setItem("found",found)
    localStorage.setItem("img", img)
  }
}

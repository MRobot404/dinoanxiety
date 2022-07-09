import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {
  @Input() dataEntrante: any;
  dinos = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any>('http://demo2854538.mockable.io/dino')
      .subscribe((res) => {
        this.dinos = res;
        console.log('Entrando data ' + this.dataEntrante);

      });
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

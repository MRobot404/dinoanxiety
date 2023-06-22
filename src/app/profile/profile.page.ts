import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  id: string
  nombre:string
  type:string
  diet:string
  era:string
  found:string
  date:string
  img:string


  ngOnInit() {
  this.id= localStorage.getItem('id')
  this.nombre = localStorage.getItem('name')
  this.type = localStorage.getItem('type')
  this.diet = localStorage.getItem('diet')
  this.era = localStorage.getItem('era')
  this.found = localStorage.getItem('found')
  this.date = localStorage.getItem('date')
  this.img = localStorage.getItem('img')
  }
}

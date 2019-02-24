import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  city: string;
  country: string;

  constructor(private storage: Storage, private router: Router) { 
  	this.storage.get('location').then((val)=> {
  		if (val != null){
  			let location = JSON.parse(val);
  			this.city = location.city;
  			this.country = location.country;
  		} else {
  			this.city = 'London';
  			this.country = 'UK';
  		}
  	})
  }

  saveForm(){
  	let location = {
  		city: this.city,
  		country: this.country
  	}
  	this.storage.set('location', JSON.stringify(location) );
  	this.router.navigate(['/tabs/tab1'])
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	weatherObj: any;
	location: {
		city: string,
		country: string
	}

	constructor(
		private weatherService: WeatherService,
		private storage: Storage
		) {
		
	}

	ionViewWillEnter(){
		this.storage.get('location').then((val) => {
			if (val != null){
				this.location = JSON.parse(val);
			} else {
				this.location = {
					city: 'London',
					country: 'UK'
				}
			}

			this.weatherService.getWeather(this.location.city, this.location.country)
			.subscribe(weatherObj => {
				
				this.weatherObj = weatherObj;
				console.log(this.weatherObj);
			})
		})
	
	}
}

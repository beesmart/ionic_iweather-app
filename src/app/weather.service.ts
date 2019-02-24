import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from "rxjs";
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

	apiKey = '03ff33d7c189c05abf6b3e9d6db2305f';
	urlPrefix;
	urlQuery;

  constructor(public http: Http) { 
  	console.log('Hi weather service');
  	this.urlPrefix = 'https://api.openweathermap.org/data/2.5/weather?q=';
  	this.urlQuery = '&appid=' + this.apiKey + '&units=metric';
  }

  getWeather(city, state){
  	return this.http.get(this.urlPrefix + city + this.urlQuery)
  		.pipe(map(res => res.json()),
  			 catchError(<T>(error: any, result?: T) => {
		        console.log(error);
		        return of(result as T);
		      })
  		)
  }
}


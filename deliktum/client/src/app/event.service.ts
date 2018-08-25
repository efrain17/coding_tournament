import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Headers, RequestMethod, ResponseContentType } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  BASE_URL = 'http://localhost:9000/api';
  eventsDefaul: any = [
    { latitude: 28.4685, longitude: 77.0056, toolTip: 'Here too' },
    { latitude: 28.4795, longitude: 77.0276, toolTip: 'Here too' },
    { latitude: 28.4605, longitude: 77.0546, toolTip: 'Here too' },
    { latitude: 28.581218, longitude: 76.632947, toolTip: 'Here too' },
    { latitude: 28.579444, longitude: 76.683333, toolTip: 'Here too' }
  ];

  constructor(private http: Http ) { }

  public getEvents() {
  	let url = this.BASE_URL + '/events';
    return this.getServer(url);
  }

  postServerJson(url, body) {
    let headers = new Headers({'Content-Type': 'application/json' });
    let options = new RequestOptions({
      headers: headers,
      method: RequestMethod.Post
    });
    return this.http.post(this.BASE_URL + url, body, options)
    .toPromise()
    .catch(this.error);
  }

  getServer(url)  {
    return this.http.get(url)
    .toPromise()
    .then((response: Response) => {
      return response.json().length ? response.json() : this.eventsDefaul;
    })
    .catch(this.error);
  }

  error(error: any) {
    return Promise.reject(error.message || error);
  }
}

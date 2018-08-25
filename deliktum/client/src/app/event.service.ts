import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  public getEvents() {
    return [
      { lat: 28.4685, lng: 77.0056, toolTip: 'Here too' },
      { lat: 28.4795, lng: 77.0276, toolTip: 'Here too' },
      { lat: 28.4605, lng: 77.0546, toolTip: 'Here too' },
      { lat: 28.581218, lng: 76.632947, toolTip: 'Here too' },
      { lat: 28.579444, lng: 76.683333, toolTip: 'Here too' }
    ];
  }
}

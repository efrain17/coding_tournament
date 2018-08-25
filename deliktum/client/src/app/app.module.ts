import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { EventComponent } from './event/event.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { EventService } from './event.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapComponent,
    FooterComponent,
    EventComponent
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOAO2_i3zixBUPIv7TU5HPV5xJt4374hU'
    }),
    AgmJsMarkerClustererModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }

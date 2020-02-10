import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// add
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapComponent } from './map/map.component';
import { GeoComponent } from './geo/geo.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    GeoComponent,
  ],
  imports: [
    BrowserModule,
    // add
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'}),
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

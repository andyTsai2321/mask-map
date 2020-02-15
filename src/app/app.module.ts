import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MainService } from './service/main.service';
import { MapService } from './map/map.service';
import { LeftSideComponent } from './left-side/left-side.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LeftSideComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule.forRoot(),
    LeafletMarkerClusterModule,
    FormsModule
  ],
  providers: [MainService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }

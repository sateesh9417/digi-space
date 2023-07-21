import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigiSpaceComponent } from './digi-space/digi-space.component';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { AudioComponent } from './audio/audio.component';
import { DisplaysComponent } from './displays/displays.component';
import { LightingComponent } from './lighting/lighting.component';

@NgModule({
  declarations: [
    AppComponent,
    DigiSpaceComponent,
    AirQualityComponent,
    TemperatureComponent,
    AudioComponent,
    DisplaysComponent,
    LightingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

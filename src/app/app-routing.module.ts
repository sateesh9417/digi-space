import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigiSpaceComponent } from './digi-space/digi-space.component';
import { AirQualityComponent } from './air-quality/air-quality.component';
import { AudioComponent } from './audio/audio.component';
import { DisplaysComponent } from './displays/displays.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { LightingComponent } from './lighting/lighting.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component:DigiSpaceComponent },
  { path:'air-quality', component:AirQualityComponent },
  { path:'audio', component:AudioComponent },
  { path:'displays', component:DisplaysComponent },
  { path:'temperature', component:TemperatureComponent },
  { path:'lighting', component:LightingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

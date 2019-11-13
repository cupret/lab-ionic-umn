import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapComponent } from './google-map/google-map.component'

@NgModule({
  declarations: [
    GoogleMapComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [
    GoogleMapComponent
  ],
  entryComponents: [
    GoogleMapComponent
  ]
})
export class ComponentsModule { }

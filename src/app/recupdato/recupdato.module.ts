import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecupdatoPageRoutingModule } from './recupdato-routing.module';

import { RecupdatoPage } from './recupdato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecupdatoPageRoutingModule
  ],
  declarations: [RecupdatoPage]
})
export class RecupdatoPageModule {}

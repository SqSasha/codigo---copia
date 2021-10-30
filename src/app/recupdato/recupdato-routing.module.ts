import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecupdatoPage } from './recupdato.page';

const routes: Routes = [
  {
    path: '',
    component: RecupdatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecupdatoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AguardePage } from './aguarde.page';

const routes: Routes = [
  {
    path: '',
    component: AguardePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AguardePageRoutingModule {}

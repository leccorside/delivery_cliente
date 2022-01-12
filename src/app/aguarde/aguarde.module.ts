import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AguardePageRoutingModule } from './aguarde-routing.module';

import { AguardePage } from './aguarde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AguardePageRoutingModule
  ],
  declarations: [AguardePage]
})
export class AguardePageModule {}

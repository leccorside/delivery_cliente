import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aguarde',
  templateUrl: './aguarde.page.html',
  styleUrls: ['./aguarde.page.scss'],
})
export class AguardePage implements OnInit {

  constructor(private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }

  enviar(){
    this.navCtrl.navigateRoot(['./sign-in']);
  }

}

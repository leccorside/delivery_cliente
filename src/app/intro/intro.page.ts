import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

 //@ViewChild('myslide')  slides: IonSlides;
 @ViewChild("myslide",{static:false}) slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(
    private navCtrl: NavController

  ) {

  }

  ngOnInit() {
  }

  proximo(){
    //this.slides.slideTo(1);
    this.slides.slideNext();
  }

  anterior(){
    //this.slides.slideTo(0);
    this.slides.slidePrev();
  }

  pular(){
    this.navCtrl.navigateRoot(['/sign-in']);
  }

  comecar(){
    this.navCtrl.navigateRoot(['/sign-in']);
  }

}

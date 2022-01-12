import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-sign-up3',
  templateUrl: './sign-up3.page.html',
  styleUrls: ['./sign-up3.page.scss'],
})
export class SignUp3Page implements OnInit {

  cameraData1: string;
  cameraData2: string;
  cameraData3: string;

  base64Image1: string;
  base64Image2: string;
  base64Image3: string;

  className1: string = 'img-mini';
  className2: string = 'none';

  className3: string = 'img-mini';
  className4: string = 'none';

  className5: string = 'img-mini';
  className6: string = 'none';

  constructor(
    private navCtrl: NavController, 
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera
    ) { }

  ngOnInit() {
  }

  enviar(){
    this.navCtrl.navigateRoot(['./tabs']);
  }

/*IMAGEM 1*/ 
  async escolherImagem1() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecione a imagem',
      buttons: [
        {
          text: 'Câmera',
          icon: 'camera',
          handler: () => {
            this.openCamera();
            console.log('Abrindo Câmera');
          }
        },{
          text: 'Galeria',
          icon: 'image',
          handler: () => {
            this.openGaleria();
            console.log('Abrindo Galeria');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  openCamera(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.cameraData1 = imageData;
      this.base64Image1 = 'data:image/jpeg;base64,' + imageData;
      this.className1 = 'none';
      this.className2 = 'img-mini';
    }, (err) => {
     // Handle error
    });
  }

  openGaleria(){

    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.cameraData1 = imageData;
      this.base64Image1 = 'data:image/jpeg;base64,' + imageData;
      this.className1 = 'none';
      this.className2 = 'img-mini';
    }, (err) => {
     // Handle error
    });

  }

/*IMAGEM 2*/ 
  async escolherImagem2() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecione a imagem',
      buttons: [
        {
          text: 'Câmera',
          icon: 'camera',
          handler: () => {
            this.openCamera2();
            console.log('Abrindo Câmera');
          }
        },{
          text: 'Galeria',
          icon: 'image',
          handler: () => {
            this.openGaleria2();
            console.log('Abrindo Galeria');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  openCamera2(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.cameraData2 = imageData;
      this.base64Image2 = 'data:image/jpeg;base64,' + imageData;
      this.className3 = 'none';
      this.className4 = 'img-mini';
    }, (err) => {
     // Handle error
    });
  }

  openGaleria2(){

    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.cameraData2 = imageData;
      this.base64Image2 = 'data:image/jpeg;base64,' + imageData;
      this.className3 = 'none';
      this.className4 = 'img-mini';
    }, (err) => {
     // Handle error
    });

  }

/*IMAGEM 3*/ 
  async escolherImagem3() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecione a imagem',
      buttons: [
        {
          text: 'Câmera',
          icon: 'camera',
          handler: () => {
            this.openCamera3();
            console.log('Abrindo Câmera');
          }
        },{
          text: 'Galeria',
          icon: 'image',
          handler: () => {
            this.openGaleria3();
            console.log('Abrindo Galeria');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  openCamera3(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.cameraData3 = imageData;
      this.base64Image3 = 'data:image/jpeg;base64,' + imageData;
      this.className5 = 'none';
      this.className6 = 'img-mini';
    }, (err) => {
     // Handle error
    });
  }

  openGaleria3(){

    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.cameraData3 = imageData;
      this.base64Image3 = 'data:image/jpeg;base64,' + imageData;
      this.className5 = 'none';
      this.className6 = 'img-mini';
    }, (err) => {
     // Handle error
    });

  }



}

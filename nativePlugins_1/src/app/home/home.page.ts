import { Component } from '@angular/core';

import { Vibration } from '@ionic-native/vibration/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public base64Image: string;

  constructor(
    private vibration: Vibration,
    private geolocation: Geolocation,
    public toastController: ToastController,
    private camera: Camera) {

  }

  vibrate() {
    this.vibration.vibrate(1000);
  }

  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.presentToast('geolocation coordinates: \n' + 'latitude: ' + resp.coords.latitude + '\n' + 'longitude: ' + resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
     });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}

import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private vibration: Vibration, private geolocation: Geolocation) {

  }

  vibrate() {
    this.vibration.vibrate(1000);
  }

  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  takePicture() {

  }

}

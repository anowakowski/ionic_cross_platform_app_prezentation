import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private vibration: Vibration) {
  }

  vibrate() {
    this.vibration.vibrate(1000);
  }

  getGeolocation() {

  }

  takePicture() {

  }

}

import { Episode } from '../../interfaces/episode';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details-modal',
  templateUrl: 'details-modal.html',
})

export class DetailsModalPage {

  showId: number;
  episode: Episode;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.episode = this.navParams.get('episode');
  }

  closeDetails(){
    this.viewCtrl.dismiss();
  }
  
  ionViewDidLoad() {
  }

}

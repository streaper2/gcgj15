import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MatiersProvider } from '../../providers/matiers/matiers';



@Component({
  selector: 'page-mat-details',
  templateUrl: 'mat-details.html',
})
export class MatDetailsPage {

  mat;
  constructor(public navCtrl: NavController, public navParams: NavParams, public matService: MatiersProvider) {
    this.mat = navParams.get('mat');
  }

  ionViewDidLoad() {
    console.log(this.mat);
  }
  addMat(){
    this.mat.qtx += 1;
    this.matService.save(this.mat);
  }

}

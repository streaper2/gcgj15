import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MatiersProvider, IMaterials } from '../../providers/matiers/matiers';
import { Observable } from 'rxjs/observable';
import { MatDetailsPage } from '../mat-details/mat-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  mats: Array <IMaterials>  ;



  constructor(public navCtrl: NavController, public matService: MatiersProvider) {
    
    

  }



  ionViewDidLoad() {
    //    
    
    this.matService.getAllMats().then((data: Array <IMaterials>) => {this.mats =data} ) ;  
    
     
    
    console.log( 'mats service :', this.mats )
    //recuperation de toutes les sauvegardes dansla bdd
  }

  ionViewDidEnter(){
    if (this.mats == null) {
     // this.matService.initDb();
      this.mats = this.matService.materials;      
    }
  }

  
  
  goTo(item){
    this.navCtrl.push(MatDetailsPage, {mat : item});
  }
  
}

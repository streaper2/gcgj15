import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';



@Component({
  selector: 'page-repertoire',
  templateUrl: 'repertoire.html',
})
export class RepertoirePage {

  contacts;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController) {
  }

  
  

  ionViewDidLoad() {

    function compare (a, b) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    }

    this.contacts = [
      {name: 'Patrick', Surname: 'fiori'},
      {name: 'Maisonet', Surname: 'jean'},
      {name: 'Ordigo', Surname: 'moison'},
      {name: 'Lalane', Surname: 'pascale'},
      {name: 'Valjean', Surname: 'Jean'},
      {name: 'Mobilette', Surname: 'Instable'},
      {name: 'Alpha', Surname: 'blondy'}

    ]

    this.contacts.sort(compare);

  } // ionviewdid load


  addContact(){
    let alert = this.alertCtrl.create({
        title: 'Ajouter un contact?',
        //message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
        inputs: [
          {
            name: 'nom',
            placeholder: 'Nom'
          },
          {
            name: 'prenom',
            placeholder: 'Prenom'
          },
          {
            name: 'Numero',
            placeholder: 'N° de téléphone',
            type: 'text'
          }
        ],
        buttons: [
          {
            text: 'Annuler',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Ajouter',
            handler: () => {
              console.log('Agree clicked');
            }
          }
        ]
      });
    alert.present();
  }
}

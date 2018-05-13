import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import Dexie from 'dexie';


export interface IMaterials {
  id?: string;
  name: string;
  qtx?: number;
  pxVente?: number;
  pxAchat?: number;
}

@Injectable()
export class MatiersProvider extends Dexie {
Mats: Dexie.Table<IMaterials, string>;

materials: IMaterials[] = [
  { name: 'pierre', qtx: 0, pxVente: 5, pxAchat: 10},
  { name: 'bois', qtx: 0, pxVente: 5, pxAchat: 10},
  { name: 'cuivre', qtx: 0, pxVente: 5, pxAchat: 10},
  { name: 'bronze', qtx: 0, pxVente: 5, pxAchat: 10},
  { name: 'argent', qtx: 0, pxVente: 5, pxAchat: 10},
  { name: 'or', qtx: 0, pxVente: 5, pxAchat: 10},
  { name: 'platine', qtx: 0, pxVente: 5, pxAchat: 10},
  { name: 'cristal', qtx: 0, pxVente: 5, pxAchat: 10}

];



  constructor(private str: Storage) {
    super('WeaponZDB');
    
    this.version(1).stores({
      Mats: 'name, qtx, pxVente, pxAchat'
    });
    this.on("ready",() => this.initDb()
  )
    console.log("test get", this.Mats.get("maison"));
  }

 initDb(){
   this.materials.forEach( item => this.Mats.add(item));
 };

 getAllMats(){
   return this.Mats.toArray();
 }

 save(mat: IMaterials){
   let matToSave = this.materials.find(x => x.name == mat.name ); //on compare la data de home avec la sauvegarde et on la stock dans une variable


   if (this.Mats.toArray()){ // si la variable est deja dans la sauvegarde alors on l'update
    this.Mats.update(mat.name, mat)
   }
   this.Mats.add( matToSave ); // si la variable n'existe pas alors on la crée
 // this.Mats.set(mat.name, mat.qtx)
 }
}

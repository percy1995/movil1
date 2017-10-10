import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  irdemo1(){
    
        this.navCtrl.push('Demo1Page');
      }
    
      irdemo2(){
        
            this.navCtrl.push('Demo2Page');
          }
          irdemo3(){
            
                this.navCtrl.push('Demo3Page');
              }
}

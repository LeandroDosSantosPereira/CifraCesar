import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DescriptografarPage } from '../descriptografar/descriptografar';
import { CriptografarPage } from '../criptografar/criptografar';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DescriptografarPage;
  tab2Root: any = CriptografarPage;
  constructor(public navCtrl: NavController) {
  }
  
}

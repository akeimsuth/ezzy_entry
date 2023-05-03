import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }
 
  update() {
    this.navCtrl.pop();
  }
}

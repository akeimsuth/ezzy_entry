import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-society',
  templateUrl: './select-society.page.html',
  styleUrls: ['./select-society.page.scss'],
})
export class SelectSocietyPage implements OnInit {
  select_location: string = "1";
  select_building: string = "2"
  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }
  continue() {
    this.navCtrl.navigateRoot(['./tabs']);
  }

}

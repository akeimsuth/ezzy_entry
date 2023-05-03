import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-family-gate-pass',
  templateUrl: './family-gate-pass.page.html',
  styleUrls: ['./family-gate-pass.page.scss'],
})
export class FamilyGatePassPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }
}

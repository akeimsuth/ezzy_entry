import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gate-pass',
  templateUrl: './gate-pass.page.html',
  styleUrls: ['./gate-pass.page.scss'],
})
export class GatePassPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }
}

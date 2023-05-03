import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GatePassPage } from '../gate-pass/gate-pass.page';

@Component({
  selector: 'app-allow-guest',
  templateUrl: './allow-guest.page.html',
  styleUrls: ['./allow-guest.page.scss'],
})
export class AllowGuestPage implements OnInit {
  to_enter: string = "today"
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss();
  }

  submit() {
    this.modalController.create({ component: GatePassPage }).then((modalElement) => modalElement.present());
    this.modalController.dismiss();
  }
  
}

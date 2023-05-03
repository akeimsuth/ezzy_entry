import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GatePassPage } from '../gate-pass/gate-pass.page';

@Component({
  selector: 'app-allow-deliveryman',
  templateUrl: './allow-deliveryman.page.html',
  styleUrls: ['./allow-deliveryman.page.scss'],
})
export class AllowDeliverymanPage implements OnInit {
  to_enter: string = "today"
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  // submit() {
  //   this.modalController.create({ component: GatePassPage }).then((modalElement) => modalElement.present());
  //   this.modalController.dismiss();
  // }
}

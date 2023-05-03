import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FamilyGatePassPage } from '../family-gate-pass/family-gate-pass.page';

@Component({
  selector: 'app-add-daily-helps',
  templateUrl: './add-daily-helps.page.html',
  styleUrls: ['./add-daily-helps.page.scss'],
})
export class AddDailyHelpsPage implements OnInit {
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  submit() {
    this.modalController.create({ component: FamilyGatePassPage }).then((modalElement) => modalElement.present());
    this.modalController.dismiss();
  }
}

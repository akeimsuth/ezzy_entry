import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FamilyGatePassPage } from '../family-gate-pass/family-gate-pass.page';

@Component({
  selector: 'app-add-frequest-entries',
  templateUrl: './add-frequest-entries.page.html',
  styleUrls: ['./add-frequest-entries.page.scss'],
})
export class AddFrequestEntriesPage implements OnInit {
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

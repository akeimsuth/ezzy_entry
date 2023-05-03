import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FamilyGatePassPage } from '../family-gate-pass/family-gate-pass.page';

@Component({
  selector: 'app-add-my-vehicle',
  templateUrl: './add-my-vehicle.page.html',
  styleUrls: ['./add-my-vehicle.page.scss'],
})
export class AddMyVehiclePage implements OnInit {
  
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

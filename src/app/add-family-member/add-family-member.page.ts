import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FamilyGatePassPage } from '../family-gate-pass/family-gate-pass.page'; 

@Component({
  selector: 'app-add-family-member',
  templateUrl: './add-family-member.page.html',
  styleUrls: ['./add-family-member.page.scss'],
})
export class AddFamilyMemberPage implements OnInit {

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

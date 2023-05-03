import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; 

@Component({
  selector: 'app-allow-cab',
  templateUrl: './allow-cab.page.html',
  styleUrls: ['./allow-cab.page.scss'],
})
export class AllowCabPage implements OnInit {
  cab_company: string = "1"
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }


  dismiss() {
    this.modalController.dismiss();
  }
}

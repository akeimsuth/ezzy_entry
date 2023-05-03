import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EntryCallPage } from '../entry-call/entry-call.page';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(private modalController: ModalController, private toastController: ToastController) { }

  ngOnInit() {
    //setTimeout(() => this.entryCall(), 3000);
  }

  entryCall() {
    this.modalController.create({ component: EntryCallPage }).then((modalElement) => modalElement.present());
  }

 

}

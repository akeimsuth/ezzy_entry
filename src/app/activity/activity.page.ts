import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import { GatePassPage } from '../gate-pass/gate-pass.page';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  toggleClass = false;
  segment = 0;
  sliderOne: any;
  counter = 0; 
  viewType: string;  
  @ViewChild('slides', { static: true }) slider: IonSlides;
  constructor(private route: Router,  private modalController: ModalController) { }

  ngOnInit() {
  }
  

  notification() {
    this.route.navigate(['./notification']);
  }
  my_profile() {
    this.route.navigate(['./my-profile']);
  }
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }
  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();   
  }

 
  GatePass() {
    this.modalController.create({ component: GatePassPage }).then((modalElement) => modalElement.present());
  }

  chat() { 
    this.route.navigate(['./chat']);
    this.toggleClass = !this.toggleClass;
  }

  openMoreOptions(){
    this.toggleClass = !this.toggleClass;
  }  
}

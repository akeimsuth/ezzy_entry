import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular'; 

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {
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
  chat() {
    this.route.navigate(['./chat']);
  }
  creatPost() {
    this.route.navigate(['./creat-post']);
  }
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }
  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();   
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AllowCabPage } from '../allow-cab/allow-cab.page';
import { AllowDeliverymanPage } from '../allow-deliveryman/allow-deliveryman.page';
import { AllowGuestPage } from '../allow-guest/allow-guest.page';
import { AllowServicemanPage } from '../allow-serviceman/allow-serviceman.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  toggleClass = false;
  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }
  
  notification() {
    this.route.navigate(['./notification']);
  }
  my_profile() {
    this.route.navigate(['./my-profile']);
  }
  helpdesk() {
    this.route.navigate(['./helpdesk']);
  }
  noticesBoard() {
    this.route.navigate(['./notices-board']);
  }
  payment() {
    this.route.navigate(['./society-payments']);
  }
  bookAmenity() {
    // this.route.navigate(['./book-amenity']);
    this.route.navigate(['./booked-amenities']);
  }
  chat() { 
    this.route.navigate(['./chat']);
    this.toggleClass = !this.toggleClass;
  }

  openMoreOptions(){
    this.toggleClass = !this.toggleClass;
  }  


  allowGuest() {
    this.modalController.create({ component: AllowGuestPage }).then((modalElement) => modalElement.present());
  }
  allowDeliveryman() {
    this.modalController.create({ component: AllowDeliverymanPage }).then((modalElement) => modalElement.present());
  }
  allowServiceman() {
    this.modalController.create({ component: AllowServicemanPage }).then((modalElement) => modalElement.present());
  }
  allowCab() {
    this.modalController.create({ component: AllowCabPage }).then((modalElement) => modalElement.present());
  }



}

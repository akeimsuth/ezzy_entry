import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BookServicePage } from '../book-service/book-service.page';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  toggleClass = false;
  showCartButton = false;
  showService: string = 'serviceNotBooked';
  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }
  notification() {
    this.route.navigate(['./notification']);
  }
  my_profile() {
    this.route.navigate(['./my-profile']);
  }

  showBookedService(divVal: string) {
    this.showService = divVal;
  }

  bookService() {
    this.modalController.create({ component: BookServicePage }).then((modalElement) => {
      modalElement.onDidDismiss().then(data => this.showService = data.data ? 'serviceBooked' : 'serviceNotBooked');
      modalElement.present();
    });
  }
}

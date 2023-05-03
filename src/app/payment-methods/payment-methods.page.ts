import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.page.html',
  styleUrls: ['./payment-methods.page.scss'],
})
export class PaymentMethodsPage implements OnInit {
  payment_methods ="1"
  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }
  paymentReceipt() { 
    this.navCtrl.navigateRoot(['./payment-receipt']);
  }
}

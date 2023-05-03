import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-society-payments',
  templateUrl: './society-payments.page.html',
  styleUrls: ['./society-payments.page.scss'],
})
export class SocietyPaymentsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  
  paymentMethods() {
    this.route.navigate(['./payment-methods']);
  }
  paymentReceipt() {
    this.route.navigate(['./payment-receipt']);
  }
}



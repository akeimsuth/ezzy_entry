import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-amenity-payment-method',
  templateUrl: './amenity-payment-method.page.html',
  styleUrls: ['./amenity-payment-method.page.scss'],
})
export class AmenityPaymentMethodPage implements OnInit {
  payment_methods ="1"
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
 
  
    continue() {
      this.navCtrl.navigateRoot(['./tabs']);
    }
}

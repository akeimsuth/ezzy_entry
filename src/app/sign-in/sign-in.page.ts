 import { Component, OnInit } from '@angular/core';
import { MyEvent } from 'src/services/myevent.services';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  
  email: string = "";
  password: string = "";

  countries = new Array<any>();
  constructor(private myEvent: MyEvent, private route: Router, private navCtrl: NavController, private auth: Auth) {
    this.myEvent.getCountries().subscribe(res => this.countries = res);
  }

  ngOnInit() {
  }

  async login() {
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );
      console.log(user);
      //return user;
      this.continue();
    } catch (error) {
      console.log(error);
    }
  }

  continue() {
    this.route.navigate(['./tabs']);
  }

  goToSignUp() {
    this.route.navigate(['./sign-up']);
  }

  selectSociety() {
    this.route.navigate(['./select-society']);
  }

}

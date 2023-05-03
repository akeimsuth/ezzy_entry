import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  name: string = "";
  email: string = "";
  password: string = "";

  constructor(private route: Router, private auth: Auth) { }

  ngOnInit() {
  }

  async signup() {
    const user = await createUserWithEmailAndPassword(
      this.auth,
      this.email,
      this.password
    );
    //return user;
    this.continue();
  }

  continue() {
    this.route.navigate(['./tabs']);
  }
}

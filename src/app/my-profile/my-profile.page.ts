import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController, NavController } from '@ionic/angular'
import { AddDailyHelpsPage } from '../add-daily-helps/add-daily-helps.page';
import { AddFamilyMemberPage } from '../add-family-member/add-family-member.page';
import { AddFrequestEntriesPage } from '../add-frequest-entries/add-frequest-entries.page';
import { AddMyVehiclePage } from '../add-my-vehicle/add-my-vehicle.page';
import { FamilyGatePassPage } from '../family-gate-pass/family-gate-pass.page'; 
import { BuyappalertPage } from '../buyappalert/buyappalert.page';
import { Constants } from 'src/models/contants.models';
import { Helper } from 'src/models/helper.models';
import { MyEvent } from 'src/services/myevent.services';
import { APP_CONFIG, AppConfig } from '../app.config';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit { 
  segment: string = "posts";
  darkModeStatus: string;
  
  constructor(@Inject(APP_CONFIG) public config: AppConfig, private myEvent: MyEvent, private route: Router, private navCtrl: NavController, private modalController: ModalController) {
    let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
  }
 

  viewProfile() {
    this.route.navigate(['./view-profile']);
  }


  creatPost() {
    this.route.navigate(['./creat-post']);
  }

  GatePass() {
    this.modalController.create({ component: FamilyGatePassPage }).then((modalElement) => modalElement.present());
  }
  addFamilyMember() {
    this.modalController.create({ component: AddFamilyMemberPage }).then((modalElement) => modalElement.present());
  }
  addDailyHelps() {
    this.modalController.create({ component: AddDailyHelpsPage }).then((modalElement) => modalElement.present());
  }
  addMyVehicle() {
    this.modalController.create({ component: AddMyVehiclePage }).then((modalElement) => modalElement.present());
  }
  addFrequestEntries() {
    this.modalController.create({ component: AddFrequestEntriesPage }).then((modalElement) => modalElement.present());
  }

  getSupport() {
    this.route.navigate(['./get-support']);
  }
  termsConditions() {
    this.route.navigate(['./terms-conditions']);
  }
  changeLanguage() {
    this.route.navigate(['./change-language']);
  }
 
  signIn() {
    this.navCtrl.navigateRoot(['./sign-in']);
  }
  


  ngOnInit() { 
    this.darkModeStatus = (Helper.getThemeMode(this.config.defaultThemeMode) == Constants.THEME_MODE_DARK).toString();
  }

  onDarkMode(event) {
    let isDarkTheme = event.target.value == "true" ? true : false;
    document.body.setAttribute('class', isDarkTheme ? 'dark-theme' : 'light-theme');
    Helper.seThemeMode(isDarkTheme ? Constants.THEME_MODE_DARK : Constants.THEME_MODE_LIGHT);
  }

  developed_by() {
    window.open("https://opuslab.works/", '_system', 'location=no');
  }

  buyappalert() {
    this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  }
}

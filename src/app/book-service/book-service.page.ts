import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns'

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.page.html',
  styleUrls: ['./book-service.page.scss'],
})
export class BookServicePage implements OnInit {
  modes = ['date-time'];
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  Date = '';
  Time = ''; 
  @ViewChild(IonDatetime) datetime: IonDatetime;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    // this.setToday(); 
    // this.setNow(); 
  }

  setToday() {
    this.Date = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'dd MMM yyyy');
  }
  setNow() {
    this.Time = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'dd MMM yyyy');
  }

  dateChanged(value) {
    this.dateValue = value;
    this.Date = format(parseISO(value), 'dd MMM yyyy'); 
  }

  timeChanged(value) {
    this.dateValue = value; 
    this.Time = format(parseISO(value), 'HH:mm a');
  }


  close() {
    this.datetime.cancel(true);
  }
  select() {
    this.datetime.confirm(true);
  }
  
  
  dismiss() {
    this.modalController.dismiss();
  }
  
  submit() {
    this.modalController.dismiss("showBookig");
  }
}

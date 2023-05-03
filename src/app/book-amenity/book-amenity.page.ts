import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns'

@Component({
  selector: 'app-book-amenity',
  templateUrl: './book-amenity.page.html',
  styleUrls: ['./book-amenity.page.scss'],
})
export class BookAmenityPage implements OnInit {
  modes = ['date-time'];
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  StartDate = '';
  StartTime = '';
  EndDate = '';
  EndTime = '';
  @ViewChild(IonDatetime) datetime: IonDatetime;
  constructor(private route: Router) { }
  ngOnInit() {
    this.setToday();
    this.setToday2();
    this.setNow();
    this.setNow2();
  }

  setToday() {
    this.StartDate = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'dd MMM yyyy');
  }
  setToday2() {
    this.StartTime = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'HH:mm a');
  }
  setNow() {
    this.EndDate = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'dd MMM yyyy');
  }
  setNow2() {
    this.EndTime = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'HH:mm a');
  }


  dateChanged(value) {
    this.dateValue = value;
    this.StartDate = format(parseISO(value), 'dd MMM yyyy'); 
  }
  dateChanged2(value) {
    this.dateValue = value; 
    this.EndDate = format(parseISO(value), 'dd MMM yyyy');
  }
  timeChanged(value) {
    this.dateValue = value; 
    this.StartTime = format(parseISO(value), 'HH:mm a');
  }
  timeChanged2(value) {
    this.dateValue = value; 
    this.EndTime = format(parseISO(value), 'HH:mm a');
  }
 

  close() {
    this.datetime.cancel(true);
  }
  select() {
    this.datetime.confirm(true);
  }
  
  amenityPaymentMethod() {
    this.route.navigate(['./amenity-payment-method']);
  }
}


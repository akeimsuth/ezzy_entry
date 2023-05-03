import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booked-amenities',
  templateUrl: './booked-amenities.page.html',
  styleUrls: ['./booked-amenities.page.scss'],
})
export class BookedAmenitiesPage implements OnInit {

  constructor(  private route: Router) { }

  ngOnInit() {
  }

  selectAmenity() {
    this.route.navigate(['./select-amenity']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-amenity',
  templateUrl: './select-amenity.page.html',
  styleUrls: ['./select-amenity.page.scss'],
})
export class SelectAmenityPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  bookAmenity() {
    this.route.navigate(['./book-amenity']);
  }
}

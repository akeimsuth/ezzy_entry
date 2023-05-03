import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.page.html',
  styleUrls: ['./helpdesk.page.scss'],
})
export class HelpdeskPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  complaintInfo() {
    this.route.navigate(['./complaint-info']);
  }
  raiseComplaint() {
    this.route.navigate(['./raise-complaint']);
  }
}

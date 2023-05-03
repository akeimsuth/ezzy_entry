import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-raise-complaint',
  templateUrl: './raise-complaint.page.html',
  styleUrls: ['./raise-complaint.page.scss'],
})
export class RaiseComplaintPage implements OnInit {
  complaint_type = "personal"
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  submit() {
    this.navCtrl.pop();
  }

}

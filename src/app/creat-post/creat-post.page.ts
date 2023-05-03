import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-creat-post',
  templateUrl: './creat-post.page.html',
  styleUrls: ['./creat-post.page.scss'],
})
export class CreatPostPage implements OnInit {

  constructor(private navCtrl: NavController ) { }

  ngOnInit() {
  }
 
  continue() {
     this.navCtrl.pop();
  }
  
}

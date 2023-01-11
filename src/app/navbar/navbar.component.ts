import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUser : any
searchtext: any;
  constructor(private af: AngularFireAuth, private route: Router, private as: AuthService) { 
    this.as.user.subscribe(user => {
      if (user) {
        this.isUser=true
      } else {
        this.isUser=false
      }
    })
  }

  ngOnInit() {
  }

  logout() {
    this.af.signOut().then(() => {
      //console.log("Çıkış Başarılı!")
      this.route.navigate(['/giris']);
    })
      .catch(() => {
      console.log("Çıkış yaparken sorun oluştu!")
    })
  }

}

import { User } from 'firebase/auth';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private  sa:AuthService,private fs:AngularFirestore,private route:Router) { }

  ngOnInit(): void {
  }
  register(f: any) {
    //console.log(f.value)
    let data = f.value
    this.sa.signUp(data.email, data.password).then((user) => {
      this.fs.collection("users").doc(user.user?.uid).set({
        flName: data.flName,
        email: data.email,
        bio: data.bio,
        uid: user.user?.uid
      }).then(() => {
        this.route.navigate(["/"])
      })
    }).catch((err) => {
      console.log(err)
    })
  }

}

import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messageError = ''
  user: any

  constructor(private sa:AuthService,private route:Router) { }

  ngOnInit() {
  }



  login(f: any) {
    
    let data = f.value
    this.sa.signIn(data.email, data.password)
      .then((user) => {
        //console.log("başarılı!")
        this.route.navigate(['/'])
        localStorage.setItem("userConnect",this.user.user.uid)
      })
      
      .catch(() => {
        
        this.messageError = "Yanlış mail veya şifre"
       })
  }

}

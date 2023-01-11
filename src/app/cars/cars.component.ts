import { AuthService } from './../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  Uid: any
  successMessage: any
  dataArray: any
  isUser: any

  constructor(private fs: AngularFirestore, private route: Router, private as: AuthService) {
    this.as.user.subscribe(user => {
      this.Uid = user?.uid
      if (user) {
        this.isUser = true
      } else {
        this.isUser = false
      }
    })
  }

  ngOnInit() {

    this.fs.collection("cars").snapshotChanges().subscribe((data) => {
      this.dataArray = data.map(element => {
        return {
          id: element.payload.doc.id,
          title: (element.payload.doc.data() as { title: string })['title'],
          desc: (element.payload.doc.data() as { desc: string })['desc'],
          image: (element.payload.doc.data() as { image: string })['image'],
          price: (element.payload.doc.data() as { price: number })['price'],
          category: (element.payload.doc.data() as { category: string })['category'],
          uid: (element.payload.doc.data() as { uid: string })['uid'],
          
          
        }
      })
    })

  }

  addproduct(f: any) {
    
    let data = f.value
    this.fs.collection("cars").add({
      title: data.title,
      price: data.price,
      desc: data.desc,
      image: data.image,
      category: data.category,
      uid: this.Uid
    }).then(() => {
      this.successMessage = 'eklendi'
      document.location.reload()
    })
      .catch(error => {
        console.error("Error writing document: ", error);
      })
  }

  delete(id: string | undefined) {
    this.fs.collection("cars").doc(id).delete()
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up2',
  templateUrl: './sign-up2.page.html',
  styleUrls: ['./sign-up2.page.scss'],
})
export class SignUp2Page implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  continue() {
    this.route.navigate(['./verification']);
  } 

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  cpf: string = "";
  cnpj: string = "";
  celular: string = "";

  constructor(private route: Router) { }

  ngOnInit() {
  }

  continue() {
    this.route.navigate(['./sign-up3']);
  } 
}

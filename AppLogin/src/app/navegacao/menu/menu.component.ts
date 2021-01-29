import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.services';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public email!: string;
  public password!: string;


  constructor(private LoginService: LoginService) { }
  

  ngOnInit(): void {

  }

  cadastrar(){

    // this.LoginService.cadastrarLogin(this.email,this.password);

    console.log(this.email+" "+ this.password);

  }

}

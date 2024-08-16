import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {
  username:string='';
  password:string='';
  inValidLogin=false;
  constructor(private router:Router){}
  checkLogin(){
    if(this.username=="priyanka" && this.password=="priyanka@123"){
      //sessionStorage.setItem('username', this.username);
      this.router.navigate(['docdash']);
      return true;
    }
    else{
      this.router.navigate(['home'])
      return false;
    }

  }



}

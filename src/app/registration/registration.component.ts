import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private authService: AuthService,private _route : Router) { }

  ngOnInit(): void {
  }

  regisForm = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl('',Validators.email),
    password : new FormControl(''),
    Mobile : new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")] )
  });

onRegisForm(){
 this.authService.onSubmitRegForm(this.regisForm.value);
 this._route.navigate(['login']);
}


}

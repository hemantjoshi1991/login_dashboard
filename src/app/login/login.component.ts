import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService : AuthService ) {}

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    userId: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
   
  });

  onLoginForm(){
   this._authService.onSubmitLoginForm();
  }

}

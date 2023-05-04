import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router : Router) { }
  onSubmitRegForm(formData){
    console.log(formData)
  }
onSubmitLoginForm(){
 this._router.navigate(['admin'])
}
  
}

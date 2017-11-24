import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth";
import {PasswordValidation} from "../../../validators/PasswordValidation";
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  public registerData: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public authService: AuthService, public authProvider: AuthProvider ) {
    this.registerData = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      firstname: ['', Validators.compose([Validators.required, Validators.maxLength(60)])],
      lastname: ['', Validators.compose([Validators.required, Validators.maxLength(60)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      passwordConfirmation: ['', Validators.compose([Validators.required])],
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

  submitRegistration() {
	console.log(this.registerData.value);
	let aut = this.authProvider.register( this.registerData.value );
	console.log(aut);
	// return new Promise((resolve, reject) => {
	// 	this.authProvider.register(this.registerData.value).subscribe(response => {

	// 		let token = response.{}
	// 		console.log(response);
	// 		window.localStorage.setItem( ‘app-name’, JSON.stringify(response["tocken"]));
	// 		resolve();
	// 	}, error => {
	// 		reject(error);
	// 	});
	// });

	
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/network-calls/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    // username: new FormControl('', [Validators.email, Validators.required]),
    useremail: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor( private authService: AuthService ){}
  onLogin() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((res: any) => {
      console.log(res);
    })
  }
}

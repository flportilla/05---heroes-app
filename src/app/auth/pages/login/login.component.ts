import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  

  constructor(
    private Router: Router,
    private AuthService: AuthService

  ) { }

  login() {
    this.AuthService.login()
      .subscribe(res => {
        if (res.id) {
          this.Router.navigate(['./characters'])
          return;
        }

      })
  }

}

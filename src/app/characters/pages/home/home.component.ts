import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .container{
    margin: 10px;
  }
  `]
})
export class HomeComponent implements OnInit {

  // public user!: User;

  get user(){
    return this.AuthService.user
  }

  constructor(
    private Router: Router,
    private AuthService: AuthService
    ) { }

  ngOnInit(): void {
  }

  logout(){
    this.Router.navigate(['./auth'])
  }
}

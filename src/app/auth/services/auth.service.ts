import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap, map, of } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = environment.baseUrl 
  private _user: User | undefined;

  get user(): User{
    return {...this._user!}
  }

  constructor(private http: HttpClient) { }

  login(): Observable<User> {

    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this._user = user),
        tap(user => localStorage.setItem('id',user.id )),
        );
  }

  verifyAuth(): Observable<boolean>{
    if(!localStorage.getItem('id')) {
      return of(false)
    }

    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        map(user => {
          this._user = user
          return true
        })
      )

  }

}

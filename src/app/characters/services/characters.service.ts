import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Characters } from '../interfaces/Characters.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {


  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient,) { }

  getChars(): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.baseUrl}/chars`)
  }

  getCharById(id: string): Observable<Characters> {
    return this.http.get<Characters>(`${this.baseUrl}/chars/${id}`)
  }

  getSuggestions(term: string): Observable<Characters[]> {
    return this.http.get<Characters[]>(`${this.baseUrl}/chars?q=${term}&_limit=5`)
  }

  addCharacter(character: Characters):Observable<Characters> {
    return this.http.post<Characters>(`${this.baseUrl}/chars`, character)
  }

  updateCharacter(character: Characters):Observable<Characters> {
    return this.http.put<Characters>(`${this.baseUrl}/chars/${character.id}`, character)
  }

  deleteCharacter(id: string):Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/chars/${id}`)
  }

}
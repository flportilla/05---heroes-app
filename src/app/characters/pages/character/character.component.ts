import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Characters } from '../../interfaces/Characters.interface';
import { CharactersService } from '../../services/characters.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styles: [`
  mat-card {
    margin-top: 20px;
  }
  `]
})
export class CharacterComponent implements OnInit {

  public char!: Characters;

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.charactersService.getCharById(id)))
      .subscribe(char => this.char = char)
  }
}

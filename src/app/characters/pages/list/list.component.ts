import { Component, OnInit } from '@angular/core';
import { Characters } from '../../interfaces/Characters.interface';
import { CharactersService } from '../../services/characters.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  public characters: Characters[] = []

  constructor(private CharactersService: CharactersService) { }

  ngOnInit(): void {

    this.CharactersService.getChars()
      .subscribe(res => {
        this.characters = res
      });
  }

}
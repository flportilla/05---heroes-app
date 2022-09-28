import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Characters } from '../../interfaces/Characters.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  public term: string = ''
  public characters: Characters[] = []
  public selectedCharacter: Characters | undefined;

  constructor(private CharactersService: CharactersService) { }

  ngOnInit(): void {
  }

  searching() {
    this.CharactersService.getSuggestions(this.term.trim())
      .subscribe(characters => {
        this.characters = characters
      })

      
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    if(!event.option.value) {
      this.selectedCharacter = undefined
      return
    } 

    const character: Characters = event.option.value;

    this.term = character.name;

    this.CharactersService.getCharById(character.id!)
      .subscribe(char => this.selectedCharacter = char)
  }

}

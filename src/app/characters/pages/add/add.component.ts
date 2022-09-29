import { Component, OnInit } from '@angular/core';
import { Characters } from '../../interfaces/Characters.interface';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
    img{
      width: 50%;
      border-radius: 5px;
    }
  `]
})
export class AddComponent implements OnInit {

  public dominantSide = [
    {
      id: 'Left',
      desc: 'Left hand'
    },
    {
      id: 'Right',
      desc: 'Right hand'
    },
    {
      id: 'Unknown',
      desc: 'Unknown'
    },
    {
      id: 'Ambidextrous',
      desc: 'Ambidextrous'
    },
    {
      id: 'Omnidextrous',
      desc: 'Omnidextrous'
    },
  ]
  public character: Characters = {
    name: '',
    career: '',
    age_sex: 'undefined',
    origin: '',
    height: 'n/a',
    weight: 'n/a',
    build: 'normal',
    dominant_side: '',
    innate: ''
  }
  constructor(
    private CharactersService: CharactersService,
    private ActivatedRoute: ActivatedRoute,
    private Router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    if (this.Router.url.includes('add')) return

    this.ActivatedRoute.params
      .pipe(
        switchMap(
          ({ id }) => this.CharactersService.getCharById(id))
      )
      .subscribe(char => this.character = char);
  }

  save() {
    if (this.character.name.trim().length === 0) return

    if (this.character.id) {
      this.CharactersService.updateCharacter(this.character)
        .subscribe(char => this.showSnack('Updated'))
    }
    else {
      this.CharactersService.addCharacter(this.character)
        .subscribe(char => {
          this.showSnack('Created')
          this.Router.navigate(['/characters/edit', char.id])
        });
    }
  }

  delete() {

    const dialog = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: { ...this.character }
    })

    dialog.afterClosed()
      .subscribe(res => {

        if (res) {
          this.CharactersService.deleteCharacter(this.character.id!)
            .subscribe(res => {
              this.Router.navigate(['/characters'])
            })
        }
      })
  }

  showSnack(message: string): void {
    this.snackBar.open(message, 'Ok!', {
      duration: 2500
    })
  }
}

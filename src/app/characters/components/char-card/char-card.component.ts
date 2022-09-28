import { Component, Input } from '@angular/core';
import { Characters } from '../../interfaces/Characters.interface';

@Component({
  selector: 'app-char-card',
  templateUrl: './char-card.component.html',
  styles: [
  ]
})
export class CharCardComponent {

  @Input() char!: Characters
}

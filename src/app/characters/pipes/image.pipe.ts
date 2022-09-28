import { Pipe, PipeTransform } from '@angular/core';
import { Characters } from '../interfaces/Characters.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: Characters): string {
    return `assets/chars/${value.id}.webp`;
  }

}

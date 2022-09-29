import { Pipe, PipeTransform } from '@angular/core';
import { Characters } from '../interfaces/Characters.interface';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {

  transform(value: Characters): string {

    if (!value.id && !value.alt_img) {
      return `assets/no-image.png`

    } else if (value.alt_img) {
      return value.alt_img
      
    } else {
      return `assets/chars/${value.id}.webp`;
    }
  }
}

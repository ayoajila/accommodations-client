import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceWithSpace'
})
export class ReplaceWithSpacePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('_', ' ');
  }

}

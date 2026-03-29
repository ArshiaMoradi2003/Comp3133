import { Pipe, PipeTransform } from '@angular/core';

/**
 * Exercise #2 – Custom Pipe
 * Replaces every dash '-' in a string with a space ' '.
 * Usage in template:  {{ hero.name | removeSpaces }}
 */
@Pipe({
  name: 'removeSpaces',
})
export class RemoveSpacesPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (!value) return value;
    return value.replace(/-/g, ' ');
  }
}

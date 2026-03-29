import { Directive, HostListener, ElementRef } from '@angular/core';

/**
 * Exercise #3 – Custom Directive
 * Converts the input field's text to UPPERCASE when the user clicks away (blur).
 * Usage in template:  <input appInputFormat />
 */
@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {

  constructor(private el: ElementRef) {}

  @HostListener('blur')
  onBlur(): void {
    const currentValue: string = this.el.nativeElement.value;
    this.el.nativeElement.value = currentValue.toUpperCase();
  }
}

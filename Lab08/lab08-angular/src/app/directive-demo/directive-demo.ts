import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormatDirective } from '../input-format';

/**
 * Exercise #3 – Custom Directive Demo Page
 * Demonstrates the appInputFormat directive which converts
 * input text to UPPERCASE on the blur (click-away) event.
 */
@Component({
  selector: 'app-directive-demo',
  standalone: true,
  imports: [CommonModule, InputFormatDirective],
  templateUrl: './directive-demo.html',
  styleUrl: './directive-demo.css'
})
export class DirectiveDemoComponent {
  lastValue: string = '';

  onBlurCapture(event: Event): void {
    this.lastValue = (event.target as HTMLInputElement).value;
  }
}

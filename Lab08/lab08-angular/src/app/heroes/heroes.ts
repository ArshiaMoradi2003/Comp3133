import { Component, OnInit } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../shared/hero';
import { HEROES } from '../shared/mock-heroes';
import { RemoveSpacesPipe } from '../remove-spaces-pipe';

/**
 * Exercise #1 – Structural Directives & Data Binding
 * Exercise #2 – removeSpaces custom pipe applied to hero names
 */
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, UpperCasePipe, RemoveSpacesPipe],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;

  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

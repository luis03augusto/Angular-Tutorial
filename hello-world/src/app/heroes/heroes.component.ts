import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-horoes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectdHero : Hero;
  
  heroes: Hero[];
  
  constructor(private heroSevice:HeroService) { }
  
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero):void{
    this.selectdHero = hero;
  }

  getHeroes(): void{
    this.heroSevice.getHeroes()
    .subscribe(heroes => this.heroes = heroes);    
  }

}

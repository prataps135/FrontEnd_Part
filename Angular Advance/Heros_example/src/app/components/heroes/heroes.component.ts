import { Component } from '@angular/core';
import { Hero } from './Hero'
import { HEROES } from 'src/app/mock-heroes';
import { HeroService } from 'src/app/service/hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService:HeroService){}

  ngOnInit():void{
    this.getHeroes();
  }

  // original
  // getHeroes():void{
  //   this.heroes = this.heroService.getHeroes();
  // }

  // Observable
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // hero:Hero={
  //   id:1,
  //   name:"Windstorm"
  // };
}

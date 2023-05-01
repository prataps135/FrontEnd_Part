import { Injectable } from '@angular/core';
import { Hero } from '../components/heroes/Hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // Original
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // Observable
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}

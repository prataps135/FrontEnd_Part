import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit{
  // @Input() selectedHero?:Hero;
  hero?:Hero;

  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location:Location
  ){}

  ngOnInit(): void {
      this.getHero();
  }

  getHero():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(
      hero => this.hero = hero
    );
  }

  save():void{
    if(this.hero){
      this.heroService.updateHero(this.hero).
        subscribe(() => this.goBack());
    }
  }

  goBack():void{
    this.location.back();
  }
}

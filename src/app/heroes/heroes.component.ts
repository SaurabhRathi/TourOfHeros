import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero? : Hero;
  heroList : Hero[] = [];
  // selectedHero? : Hero; 

  constructor(private heroService: HeroService, private messageService: MessageService) { 
  //Reserve the constructor for minimal initialization 
  //  such as wiring constructor parameters to properties.
  //  The constructor shouldn't do anything.
    
  }

  ngOnInit(): void {
    this.hero =  {id : 1, name : 'Saurabh'};
    this.heroService.getHeroes().subscribe(heros => this.heroList = heros);
  }

  // onSelect(hero:Hero) : void {
  //   // this.selectedHero = Object.assign({},hero);
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id= ` + hero.id + ' name= ' + hero.name);
  // }

}

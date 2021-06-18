import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero? : Hero;
  heroList : Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {  }

  ngOnInit(): void {
    this.hero =  {id : 1, name : 'Saurabh'};
    this.heroService.getHeroesFromLocal().subscribe(heros => this.heroList = heros);
  }

}

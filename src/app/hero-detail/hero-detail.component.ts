import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../heroes/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;
  serverSavedSuccess?: boolean;
  loading?:boolean;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.serverSavedSuccess = undefined;
    this.loading=false;
  }

  getHero(): void {
    const id  = this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroesFromLocal().subscribe(heros=>this.hero = heros.find(h => h.id === (id ? +id : 0)) as Hero);
  }

  save(){
    if(this.hero){
      this.loading=true;
      this.heroService.updateHero(this.hero).subscribe(
        res => {this.serverSavedSuccess = res ? true : false; this.loading = false;}
      );
    }
   
  }

  goBack(){
    this.location.back();
  }



  // The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's parameters extracted from the URL. The "id" parameter is the id of the hero to display.

  // The HeroService gets hero data from the remote server and this component will use it to get the hero-to-display.
  
  // The location is an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.


}

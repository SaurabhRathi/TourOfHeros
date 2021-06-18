import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../services/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  columnDefs = [
		{headerName: 'Id', field: 'id' ,sortable: true, filter: true},
		{headerName: 'Name', field: 'name' ,sortable: true, filter: true},
		{headerName: 'Points', field: 'points' ,sortable: true, editable : true}
	];
  
	rowData? : any[];
  gridApi: any;  
  gridColumnApi: any;  
  
  bindData(params : any) {  
    this.gridApi = params.api;  
    this.gridColumnApi = params.columnApi;  
    params.api.setRowData(this.rowData);  
      this.gridApi.sizeColumnsToFit();  
  } 
  
  constructor(private heroService: HeroService, private router: Router) { }
  
  ngOnInit() {
    this.getHeroes();
  }
 
  onRowClicked(event : any){
    this.router.navigateByUrl('/detail/'+event.data.id);
  }

  getHeroes(): void {
    this.heroService.getHeroesFromServer()
      .subscribe(heroes => {
        this.rowData = heroes;
        this.heroes = heroes.sort((a,b)=>  (b.points ? b.points : 0)-(a.points ? a.points : 0)).slice(0,4);
      });
  }
}
import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';


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
  
  BindData(params : any) {  
    this.gridApi = params.api;  
    this.gridColumnApi = params.columnApi;  
    params.api.setRowData(this.rowData);  
      this.gridApi.sizeColumnsToFit();  
  } 
  
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
  }
 

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.slice(0,4);
        this.rowData = heroes.slice(0,4);
      });
  }
}
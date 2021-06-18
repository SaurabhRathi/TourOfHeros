//common or internal modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//external modules
import { AgGridModule } from 'ag-grid-angular';

//components
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//ngrx
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './store/reducers/simple.reducer';
import { HttpClientModule } from '@angular/common/http';
import { postReducer } from './store/reducers/post.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents(null),
    StoreModule.forRoot({ 
      message: simpleReducer, post : postReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

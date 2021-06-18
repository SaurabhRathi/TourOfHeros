import { Injectable } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HEROES } from './mock-heros';
import { Observable, of, BehaviorSubject  } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private serverUrl : string = "http://localhost:5000/api/heroes";

  private count : number = 0;
  private heroBehaviorSubject : BehaviorSubject<Hero[]>;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService : MessageService) {
    this.heroBehaviorSubject =  new BehaviorSubject<Hero[]>([]);
   }

  ngOnInit() {
  }


  public getHeroesFromServer() {
    this.http.get<Hero[]>(this.serverUrl)
    .pipe(
      tap(_ => this.log('heroService, fetched heroes from server')),
      catchError((error : Error) : Observable<Hero[]> => 
      {
        this.log('heroService, failed to get heroes from server');
        return of(HEROES as Hero[]);
      })
    ).subscribe(heroes => this.heroBehaviorSubject.next(heroes));
    return this.heroBehaviorSubject;
  }

  getHeroesFromLocal() {
    return this.heroBehaviorSubject;
  }

  updateHero(hero : Hero){

    //the http service returns a cold observable so it needs to be subscribed for it to get fired
    return this.http.put<boolean>(this.serverUrl, hero).pipe(
      tap(_ => this.log(`heroService, updated hero to the server, id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero',false))
    );
  }

  private handleError <T>(operation = 'operation', result: T) {
    return (error: Error): Observable<T> => {
      return of(result);
    };
  }

  private log(msg : string){
    this.messageService.add(msg);
  }
}

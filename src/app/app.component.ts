import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './store/models/post.model';
import * as PostActions from './store/actions/post.actions';

interface AppState {
	message: string;
	post : Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Tour of Heros';

	message$ : Observable<string>;
	post: Observable<Post>;
	text: string;

	constructor(private store: Store<AppState>){
		this.message$ = this.store.select('message');
		this.post = this.store.select('post');
		this.text = "";
	}

	spanishMessage() {
		this.store.dispatch({type: 'SPANISH'})
	}

	frenchMessage() {
		this.store.dispatch({type: 'FRENCH'})
	}

	columnDefs = [
		{headerName: 'Make', field: 'make' },
		{headerName: 'Model', field: 'model' },
		{headerName: 'Price', field: 'price'}
	];

	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxter', price: 72000 }
	];

	editText() {
		this.store.dispatch(PostActions.EditText({payload : this.text}) )
	  }
	
	  resetPost() {
		this.store.dispatch(PostActions.Reset())
	  }
	
	  upvote() {
		this.store.dispatch(PostActions.Upvote({payload : 2}))
	  }
	
	  downvote() {
		this.store.dispatch(PostActions.Downvote({payload : 2}))
	  }

}

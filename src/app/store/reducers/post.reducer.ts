
import { Post } from '../models/post.model';
import * as PostActions from '../actions/post.actions';
import { createReducer, on } from '@ngrx/store';

const initialState : Post = {
    text: 'Hello. I am the default post',
    likes: 0
}

export const postReducer = createReducer(
    initialState,
    
    on(PostActions.EditText, 
        (state, {payload}) => ({...state , text : payload})
    ),

    on(PostActions.Reset, 
        (state) => ({...state , ...initialState})
    ),

    on(PostActions.Upvote, 
        (state, {payload}) => ({...state , likes : state.likes + payload})
    ),

    on(PostActions.Downvote, 
        (state, {payload}) => ({...state , likes : state.likes - payload})
    )
)

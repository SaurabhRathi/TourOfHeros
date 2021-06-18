

import * as HeroActions from '../actions/heroes.actions';
import { createReducer, on } from '@ngrx/store';
import { Hero } from 'src/app/heroes/hero';

const initialState : Hero[] = [];

// export const heroReducer = createReducer(
//     initialState,
    
//     on(HeroActions.GetHeroes, 
//         (state) => ({...state})
//     ),

//     on(HeroActions.Reset, 
//         (state) => ({...state , ...initialState})
//     ),

//     on(HeroActions.Upvote, 
//         (state, {payload}) => ({...state , likes : state.likes + payload})
//     ),

//     on(HeroActions.Downvote, 
//         (state, {payload}) => ({...state , likes : state.likes - payload})
//     )
// )

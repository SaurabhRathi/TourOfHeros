import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/heroes/hero';

export const GetHeroes = createAction(
    "[Hero] GetAll"
);

export const GetHeroesSucess = createAction(
    "[Hero] GetAllSucess"
);

export const GetHeroesError = createAction(
    "[Hero] GetAllError"
);

export const UpdateHero = createAction(
    "[Hero] UpdateHero",
    props<{ payload: Hero}>()
);

export const UpdateHeroSucess = createAction(
    "[Hero] UpdateHeroSucess",
    props<{ payload: Hero}>()
);

export const UpdateHeroError = createAction(
    "[Hero] UpdateHeroError",
    props<{ payload: Error}>()
);

import { createAction, props } from '@ngrx/store';

export const EditText = createAction(
    "[Post] Edit",
    props<{ payload: string}>()
);


export const Upvote = createAction(
    "[Post] Upvote",
    props<{ payload: number}>()
);


export const Downvote = createAction(
    "[Post] Downvote",
    props<{ payload: number}>()
);

export const Reset = createAction(
    "[Post] Reset"
);

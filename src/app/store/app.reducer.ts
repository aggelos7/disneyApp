import { createReducer, on } from '@ngrx/store';
import { newPagination } from './app.actions';


const initialState = { page: 0, pageSize: 50 };

export const appReducer = createReducer(
    initialState,
    on(newPagination, (state, action) => { 
        return { ...state, page: action.page, pageSize: action.pageSize } 
    }),
);
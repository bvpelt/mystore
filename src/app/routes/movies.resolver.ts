import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { MovieActionTypes, LoadMovies } from '../actions/movie.actions';

@Injectable()
export class MovieResolver implements Resolve<void> {
    constructor(private store: Store<AppState>) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.store.dispatch({ type: MovieActionTypes.LoadMovies });
    }
}
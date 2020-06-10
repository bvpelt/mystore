import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../shared/service/movies.service';
import { MovieActionTypes } from '../actions/movie.actions';


@Injectable()
export class MovieEffects {

    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            //ofType('[Movies Page] Load Movies'),
            ofType(MovieActionTypes.LoadMovies),
            mergeMap(() => this.moviesService.getAll()
                .pipe(
                    map(movies => ({ type: MovieActionTypes.LoadMoviesSuccess, payload: movies })),
                    catchError(() => of({ type: MovieActionTypes.LoadMoviesError }))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private moviesService: MoviesService
    ) { }
}
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { MoviesService } from '../shared/service/movies.service';

@Injectable()
export class MovieEffects {

    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[Movies Page] Load Movies'),
            mergeMap(() => this.moviesService.getAll()
                .pipe(
                    tap(result => console.log('result of action: ', result)),
                    map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: { movies: movies, error: null } })),
                    catchError((err) => of({ type: '[Movies API] Movies Loaded Error', payload: { movies: [], error: err } }))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private moviesService: MoviesService
    ) { }
}
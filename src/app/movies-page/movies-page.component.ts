import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../shared/model/movies.model';
import { Store } from '@ngrx/store';
import { MovieActionTypes } from '../actions/movie.actions';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  movies$: Observable<Movie[]> = this.store.select(state => state.movies);

  constructor(private store: Store<{ movies: Movie[] }>) { }

  ngOnInit(): void {
    this.store.dispatch({ type: MovieActionTypes.LoadMovies });
  }

}

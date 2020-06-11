import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movies.model';
import { MoviesService } from '../shared/service/movies.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  //movies: Movie[];
  movies$: Observable<Movie[]> = this.store.select(state => state.movies.movies);;

  //constructor(private moviesService: MoviesService) { }
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    //    this.moviesService.getAll().subscribe(movies => this.movies = movies);
    this.store.dispatch({ type: '[Movies Page] Load Movies' });
  }

}

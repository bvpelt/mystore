import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movies.model';
import { MoviesService } from '../shared/service/movies.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { FormService } from '../shared/service/form.service';
import { MoviesProcesFormService } from './movies-proces-form.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  //movies: Movie[];
  movies$: Observable<Movie[]> = this.store.select(state => state.movies.movies);;

  //constructor(private moviesService: MoviesService) { }
  constructor(private store: Store<AppState>,
    private formService: FormService,
    private moviesProcesFormService: MoviesProcesFormService) { }

  ngOnInit(): void {
    //    this.moviesService.getAll().subscribe(movies => this.movies = movies);
    this.store.dispatch({ type: '[Movies Page] Load Movies' });

    this.formService.formEmitter.subscribe(form => {
      console.log('Received form event: ', form);
      this.moviesProcesFormService.process(form);
      this.store.dispatch({ type: '[Movies Page] Load Movies' });
    });
  }

}

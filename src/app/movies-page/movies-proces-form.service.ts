import { Injectable } from '@angular/core';
import { MoviesService } from '../shared/service/movies.service';
import { FormGroup } from '@angular/forms';
import { MovieForm, MOVIEFORM_ACTION } from '../shared/model/movie-form.model';
import { Movie } from '../shared/model/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesProcesFormService {

  constructor(private moviesServer: MoviesService) { }

  process(movieForm: MovieForm): void {
    console.log('MovieProcesForm, form: ', movieForm.form);

    const form: FormGroup = movieForm.form;
    const action: string = movieForm.action;

    const f_id: string = form.get('id').value;
    const f_name: string = form.get('name').value;
    const f_releaseYear: number = form.get('releaseYear').value;
    const f_imdbUrl: string = form.get('imdbUrl').value;

    var id = null;
    if ((action === MOVIEFORM_ACTION.UPDATE) || (action === MOVIEFORM_ACTION.DELETE)) {
      id = f_id;
    }

    const movie: Movie = new Movie(id,
      f_name,
      f_releaseYear,
      f_imdbUrl);

    console.log('id:', id, ' name: ', f_name, ' releaseYear: ', f_releaseYear, ' imdbUrl: ', f_imdbUrl);

    switch (action) {
      case MOVIEFORM_ACTION.ADD: {
        console.log('Add movie');
        this.moviesServer.addMovie(movie)
          .subscribe(
            res => {
              console.log('Added movie ', movie.name);
            },
            err => {
              console.error('Error during adding movie ', movie.name, ': ', err);
            },
            () => {
              console.log('addMovie ready');
            }
          );
        break;
      }
      case MOVIEFORM_ACTION.UPDATE: {
        console.log('Update movie');
        this.moviesServer.updateMovie(movie)
          .subscribe(
            res => {
              console.log('Updated movie ', movie.name);
            },
            err => {
              console.error('Error during updating movie ', movie.name, ': ', err);
            },
            () => {
              console.log('updateMovie ready');
            }
          );
        break;
      }
      case MOVIEFORM_ACTION.DELETE: {
        console.log('Update movie');
        this.moviesServer.deleteMovie(movie)
          .subscribe(
            res => {
              console.log('Updated movie ', movie.name);
            },
            err => {
              console.error('Error during updating movie ', movie.name, ': ', err);
            },
            () => {
              console.log('updateMovie ready');
            }
          );
        break;
      }
      default: {
        console.log('Unknown action: ', action, ' no action possible');
        break;
      }
    }

    /*
    this.movieForm.patchValue({
      id: '',
      name: '',
      releaseYear: '',
      imdbUrl: ''
    });
    */
    console.log('Ready processing form');
  }
}

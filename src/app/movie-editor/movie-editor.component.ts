import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Movie } from '../shared/model/movies.model';
import { MoviesService } from '../shared/service/movies.service';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent implements OnInit {
  /*
    movieForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      releaseYear: new FormControl(''),
      imdbUrl: new FormControl('')
    });
  */
  movieForm = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    releaseYear: ['2019'],
    imdbUrl: ['']
  });

  constructor(private fb: FormBuilder,
    private moviesServer: MoviesService) { }

  ngOnInit(): void {
  }

  addMovie(): void {
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    console.warn(this.movieForm.value);
    const f_id: string = this.movieForm.get('id').value;
    const f_name: string = this.movieForm.get('name').value;
    const f_releaseYear: number = this.movieForm.get('releaseYear').value;
    const f_imdbUrl: string = this.movieForm.get('imdbUrl').value;

    var id = null;
    if (f_id && f_id.length > 0) {
      id = f_id;
    }

    const movie: Movie = new Movie(id,
      f_name,
      f_releaseYear,
      f_imdbUrl);

    console.log('id:', id, ' name: ', f_name, ' releaseYear: ', f_releaseYear, ' imdbUrl: ', f_imdbUrl);

    if (id === null) {
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
    } else {
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
    }
    this.movieForm.patchValue({
      id: '',
      name: '',
      releaseYear: '',
      imdbUrl: ''
    });
  }

  updateMovieForm() {
    this.movieForm.patchValue({
      id: '',
      name: 'Nancy',
      releaseYear: 2020,
      imdbUrl: 'https://www.imdb.com/title/tt8946378/?ref_=hm_fanfav_tt_3_pd_fp1'
    });
  }
}

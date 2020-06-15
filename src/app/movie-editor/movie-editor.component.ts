import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Movie } from '../shared/model/movies.model';
import { MoviesService } from '../shared/service/movies.service';
import { FormService } from '../shared/service/form.service';
import { MovieForm, MOVIEFORM_ACTION } from '../shared/model/movie-form.model';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent implements OnInit {

  movieFormGroup: FormGroup = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    releaseYear: ['2019'],
    imdbUrl: ['']
  });

  @Output() form = new EventEmitter<MovieForm>();

  constructor(private fb: FormBuilder,
    private formService: FormService,
    private moviesServer: MoviesService) { }

  ngOnInit(): void {
  }

  addMovie(): void {
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    console.warn(this.movieFormGroup.value);
    const movieForm: MovieForm = new MovieForm(MOVIEFORM_ACTION.ADD, this.movieFormGroup);
    this.formService.sendForm(movieForm);

    this.movieFormGroup.patchValue({
      id: '',
      name: '',
      releaseYear: '',
      imdbUrl: ''
    });

  }

  updateMovieForm() {
    this.movieFormGroup.patchValue({
      id: '',
      name: 'Nancy',
      releaseYear: 2020,
      imdbUrl: 'https://www.imdb.com/title/tt8946378/?ref_=hm_fanfav_tt_3_pd_fp1'
    });
  }

}

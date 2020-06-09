import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/service/movies.service';
import { Movie } from '../shared/model/movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  OnClick(i: number): void {
    window.location.href = this.movies[i].imdbUrl;
  }
}

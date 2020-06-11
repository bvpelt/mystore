import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/service/movies.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from '../shared/model/movies.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  id: number = 0;
  movie: Movie;

  constructor(private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((route: ParamMap) => {
        console.log('Route: ', route);
        this.id = parseInt(route.get('id'));
        if ((this.id != null) && (this.id > 0)) {
          this.moviesService.getMovie(this.id)
            .subscribe(
              (res: Movie) => {
                console.log('Received movie ', res);
                // get new list
                this.movie = res;
              },
              err => {
                console.error('Error during get movie ', this.id, ': ', err);
                this.movie = null;
              },
              () => {
                console.log('getMovie ready');
              }
            )
        }
      });
  }

}
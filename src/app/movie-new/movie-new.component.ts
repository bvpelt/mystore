import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent implements OnInit {

  id = new FormControl('');
  name = new FormControl('');
  releaseYear = new FormControl('');
  imdbUrl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  addMovie(): void {

  }
}

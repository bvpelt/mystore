import { Injectable, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MovieForm } from '../model/movie-form.model';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formEmitter = new EventEmitter<MovieForm>();

  constructor() { }

  sendForm(form: MovieForm): void {
    this.formEmitter.emit(form);
  }
}

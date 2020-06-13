import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Movie } from '../model/movies.model';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url: string = 'http://localhost:3000/movies';
  sub$: Observable<Movie[] | any> = null;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Movie[] | any> {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Cache-Control', 'public max-age=3 must-revalidate');

    this.sub$ = this.http
      .get<Movie[]>(this.url, { 'headers': headers }).pipe(
        tap(result => console.log('Opgehaald via: ', this.url, ' result:', result)),
        catchError(err => {
          console.log('Geen API gevonden\nStart eerst de json-server met\n"npm run json-server"');
          // De methode moet een observable terug geven
          // genereer daarom een observable op basis van err
          return of(err);
        }));
    return this.sub$;
  }

  getMovies(): Observable<Movie[] | any> {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Cache-Control', 'public max-age=3 must-revalidate');

    this.sub$ = this.http
      .get<Movie[]>(this.url, { 'headers': headers }).pipe(
        tap(result => console.log('Opgehaald via: ', this.url, ' result:', result)),
        catchError(err => {
          console.log('Geen API gevonden\nStart eerst de json-server met\n"npm run json-server"');
          // De methode moet een observable terug geven
          // genereer daarom een observable op basis van err
          return of(err);
        }));
    return this.sub$;
  }

  getMovie(id: number): Observable<Movie | any> {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Cache-Control', 'max-age=30 must-revalidate');

    return this.http.get<Movie>(`${this.url}/${id}`, { 'headers': headers })
      .pipe(
        tap(result => console.log('Opgehaald via: ', this.url, '/', id, ' result:', result)),
        catchError(err => {
          console.log('Get geen API gevonden\nStart eerst de json-server met\n"npm run json-server"');
          // De methode moet een observable terug geven
          // genereer daarom een observable op basis van err
          return of(err);
        }));
  }

  addMovie(movie: Movie): Observable<Movie | any> {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json');

    return this.http.post<Movie>(this.url, movie, { 'headers': headers }).pipe(
      tap(result => console.log('Created via: ', this.url, ' result:', result)),
      catchError(err => {
        console.log('Add geen API gevonden\nStart eerst de json-server met\n"npm run json-server"');
        // De methode moet een observable terug geven
        // genereer daarom een observable op basis van err
        return of(err);
      }));
  }

  updateMovie(movie: Movie): Observable<Movie | any> {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json');

    return this.http.put<Movie>(this.url + '/' + movie.id, movie, { 'headers': headers }).pipe(
      tap(result => console.log('update via: ', this.url, ' result:', result)),
      catchError(err => {
        console.log('Update geen API gevonden\nStart eerst de json-server met\n"npm run json-server"');
        // De methode moet een observable terug geven
        // genereer daarom een observable op basis van err
        return of(err);
      }));
  }

  removeCity(movie: Movie): Observable<any> {
    return this.http.delete<Movie>(`${this.url}/${movie.id}`).pipe(
      tap(result => console.log('Deleted via: ', this.url, '/', movie.id, ' result:', result)),
      catchError(err => {
        console.log('Geen API gevonden\nStart eerst de json-server met\n"npm run json-server"');
        // De methode moet een observable terug geven
        // genereer daarom een observable op basis van err
        return of(err);
      }));
  }
}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MyCounterComponent },
  //{ path: 'movies', component: MoviesComponent },
  { path: 'movies', component: MoviesPageComponent /*, resolve: { data: MoviesResolver } */ },
  { path: 'movie/:id', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

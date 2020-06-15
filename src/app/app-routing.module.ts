import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieNewComponent } from './movie-new/movie-new.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MyCounterComponent },
  {
    path: 'movies', component: MoviesPageComponent /*, resolve: { data: MoviesResolver } */,
    children: [
      { path: 'detail/:id', component: MovieDetailComponent },
      { path: 'editmovie', component: MovieEditorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

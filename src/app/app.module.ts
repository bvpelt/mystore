import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MovieEffects } from './movies-page/movie.effects';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesService } from './shared/service/movies.service';
import { MovieNewComponent } from './movie-new/movie-new.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    MoviesPageComponent,
    MovieDetailComponent,
    MovieNewComponent,
    MovieEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([MovieEffects])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './movies-page/movie.effects';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesService } from './shared/service/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    MoviesPageComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
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

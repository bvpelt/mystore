import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './shared/service/movies.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './movie-effects/movie.effects';
import { StoreRouterConnectingModule, RouterState, routerReducer } from '@ngrx/router-store';
import { CustomSerializer } from './routes/custom-route-serializer';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    MoviesComponent,
    MovieDetailComponent,
    MoviesPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      routerReducer,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot([MovieEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Full
    })
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

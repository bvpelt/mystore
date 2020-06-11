import * as MovieActions from './movie.actions';

describe('Movie', () => {
  it('should create an instance', () => {
    expect(new MovieActions.LoadMovies()).toBeTruthy();
  });
});

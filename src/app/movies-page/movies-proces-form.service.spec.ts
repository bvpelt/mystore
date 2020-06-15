import { TestBed } from '@angular/core/testing';

import { MoviesProcesFormService } from './movies-proces-form.service';

describe('MoviesProcesFormService', () => {
  let service: MoviesProcesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesProcesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

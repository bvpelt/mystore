import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieEditorComponent } from './movie-editor.component';

describe('MovieEditorComponent', () => {
  let component: MovieEditorComponent;
  let fixture: ComponentFixture<MovieEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

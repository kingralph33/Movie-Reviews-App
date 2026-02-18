import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

import { MoviesNewComponent } from './movies-new.component';
import { HttpService } from 'src/app/services/http.service';
import { Movie } from 'src/app/models/movie.model';

describe('MoviesNewComponent', () => {
  let component: MoviesNewComponent;
  let fixture: ComponentFixture<MoviesNewComponent>;
  let httpService: jasmine.SpyObj<HttpService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const httpServiceSpy = jasmine.createSpyObj('HttpService', ['createAMovie']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ MoviesNewComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [
        { provide: HttpService, useValue: httpServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    httpService = TestBed.inject(HttpService) as jasmine.SpyObj<HttpService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should map form values correctly and send to backend on submit', () => {
    // Arrange
    const mockMovie: Movie = {
      _id: '123',
      title: 'Test Movie',
      reviews: [{
        userName: 'Test User',
        rating: 5,
        review: 'Great movie!'
      }]
    };
    httpService.createAMovie.and.returnValue(of(mockMovie));

    component.createForm.setValue({
      title: 'Test Movie',
      userName: 'Test User',
      rating: 5,
      review: 'Great movie!'
    });

    // Act
    component.onSubmit();

    // Assert
    expect(httpService.createAMovie).toHaveBeenCalledWith({
      _id: '',
      title: 'Test Movie',
      reviews: [{
        userName: 'Test User',
        rating: 5,
        review: 'Great movie!'
      }]
    });
  });

  it('should navigate to movies list on successful submission', () => {
    // Arrange
    const mockMovie: Movie = {
      _id: '123',
      title: 'Test Movie',
      reviews: [{
        userName: 'Test User',
        rating: 5,
        review: 'Great movie!'
      }]
    };
    httpService.createAMovie.and.returnValue(of(mockMovie));

    component.createForm.setValue({
      title: 'Test Movie',
      userName: 'Test User',
      rating: 5,
      review: 'Great movie!'
    });

    // Act
    component.onSubmit();

    // Assert
    expect(router.navigate).toHaveBeenCalledWith(['/movies']);
  });

  it('should handle error on submission', () => {
    // Arrange
    const mockError = { status: 422, message: 'Validation error' };
    httpService.createAMovie.and.returnValue(throwError(() => mockError));
    spyOn(console, 'log');

    component.createForm.setValue({
      title: 'Test Movie',
      userName: 'Test User',
      rating: 5,
      review: 'Great movie!'
    });

    // Act
    component.onSubmit();

    // Assert
    expect(console.log).toHaveBeenCalledWith(mockError);
    expect(router.navigate).not.toHaveBeenCalled();
  });
});

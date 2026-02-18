import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Movie } from '../../models/movie.model';


@Component({
  selector: 'app-movies-new',
  templateUrl: './movies-new.component.html',
  styleUrls: ['./movies-new.component.scss'],
  standalone: false
})
export class MoviesNewComponent implements OnInit {
  topic = 'Submit a movie and your review';
  createForm: FormGroup;
  movie = new Movie();

  constructor(
    private httpService: HttpService,
    public fb: FormBuilder,
    private router: Router) {

    this.createForm = fb.group({
      title: ['', Validators.required],
      userName: ['', Validators.required],
      rating: ['', Validators.required],
      review: ['', Validators.required]
    });
  }
  ngOnInit() { }

  onSubmit() {
    // Map form values to the structure expected by the backend
    const formValues = this.createForm.value;
    const movieData: Movie = {
      _id: '',
      title: formValues.title,
      reviews: [{
        userName: formValues.userName,
        rating: formValues.rating,
        review: formValues.review
      }]
    };

    this.httpService.createAMovie(movieData)
      .subscribe({
        next: (response) => {
          console.log('SUBMITTED RESPONSE: ', response);
          this.router.navigate(['/movies']);
        },
        error: (error) => console.log(error)
      });
  }

}

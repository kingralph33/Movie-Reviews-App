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
    this.httpService.createAMovie(this.movie)
      .subscribe(
        (response) => console.log('SUBMITTED RESPONSE: ', response),
        (error) => console.log(error)
      );
    // event.preventDefault();
    // console.log('This is the data: ', this.createForm);
    // this.createForm;
    // this.httpService
    //   .createAMovie()
    //   .subscribe(movie => {
    //     console.log(movie);
    //     this.router.navigate(['/movies']);
    //   });

    // this.movie = new Movie();

    // this.createForm.reset();
  }

}

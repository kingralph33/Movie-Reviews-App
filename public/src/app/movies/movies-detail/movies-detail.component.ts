import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Movie } from '../../models/movie.model';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss'],
  standalone: false
})
export class MoviesDetailComponent implements OnInit {
  @Input()
  movie: Movie = new Movie();
  title: string = '';

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(map(params => params.get('id') as string),
        switchMap((id: string) => this.httpService.getOneMovie(id))
      )
      .subscribe(movie => {
        this.movie = movie;
        this.title = movie.title;
      });
    console.log('This is MOVIE: ', this.movie);
  }
}

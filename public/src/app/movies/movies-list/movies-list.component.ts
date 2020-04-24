import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Movie } from '../../models/movie.model';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';


export interface MovieElement {
  title: string;
}

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  // tslint:disable-next-line: no-use-before-declare
  dataSource = new MovieDataSource(this.httpService);
  displayedColumns: string[] = ['title', 'action'];
  topic = 'Movie List';
  movies: Movie[];
  chosenMovie: Movie;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getAllMovies().subscribe(movies => {
      console.log('These are the movies: ', movies);
      this.movies = movies;
    });
  }

  // readReviews(movie: Movie) {
  //   console.log('This is the CHOSEN MOVIE: ', this.chosenMovie = this.chosenMovie === movie ? null : movie);
  //   this.chosenMovie = this.chosenMovie === movie ? null : movie;
  // }
}

export class MovieDataSource extends DataSource<any> {
  constructor(private httpService: HttpService) {
    super();
  }
  connect(): Observable<Movie[]> {
    return this.httpService.getAllMovies();
  }
  disconnect() { }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly baseUrl = 'http://localhost:8000/api';

  constructor(private readonly http: HttpClient) { }

  public getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}`);
  }

  public getOneMovie(id: string): Observable<Movie> {
    console.log('INFO FROM THE SERVICE', this.http.get<Movie>(`${this.baseUrl}/${id}`));
    return this.http.get<Movie>(`${this.baseUrl}/${id}`);
  }

  public createAMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.baseUrl}`, movie);
  }

  public updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.baseUrl}/${movie._id}/review`, movie);
  }

  public removeMovie(id: string | number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.baseUrl}/${id}`);
  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesNewComponent } from './movies/movies-new/movies-new.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { MoviesUpdateComponent } from './movies/movies-update/movies-update.component';


const routes: Routes = [

  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/new', component: MoviesNewComponent },
  { path: 'movies/:id', component: MoviesDetailComponent },
  { path: 'movies/:id/review', component: MoviesUpdateComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', component: MoviesListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

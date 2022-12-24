import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { GenresComponent } from './genres/genres.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
  {path:'' , component: HomeComponent} , 
  {path:'movies', component: MoviesComponent} , 
  {path:'tv-shows', component: TvShowsComponent} , 
  {path:'genres', component: GenresComponent},
  {path:'movie/:id', component: SingleMovieComponent},
  {path:'calc', component: CalculatorComponent},
  {path:'**', redirectTo:''} // for 404 or any other path : redirect to ROOT
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

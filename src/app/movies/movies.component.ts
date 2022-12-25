import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  popularMovies:Movie[]=[];
  constructor(private movieService:MoviesService) {
    
  }

  ngOnInit(): void {
    this.movieService.getPopularMoviesByPage(1).subscribe((data:Movie[])=>{
      this.popularMovies = data;
    })
  }

}

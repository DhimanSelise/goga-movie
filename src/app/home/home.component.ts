import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies:Movie[]=[]; 
  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((response:any)=>{
      console.log(response.results); 
      this.movies = response.results;
    })
  }

}

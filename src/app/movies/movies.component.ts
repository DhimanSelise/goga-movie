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
  SearchValue:string="";
  constructor(private movieService:MoviesService) {
    
  }

  ngOnInit(): void {
    this.getMoviesByPagination(1);
  }
  getMoviesByPagination(pageNo:number){
    this.movieService.getPopularMoviesByPage(pageNo).subscribe((data:Movie[])=>{
      this.popularMovies = data;
    })
  }
  paginate(event:any){
    this.getMoviesByPagination(event.page+1);
  }
  makeSearch(){
    console.log(this.SearchValue) ; 
  }

}

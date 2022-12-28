import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';
import { TvShow } from '../models/tv-show';
import { TvShowsService } from '../services/tv-shows.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies:Movie[]=[];  
  upcomingMovies:Movie[]=[]; 
  topRatedMovies:Movie[]=[]; 
  nowPlayingMovies:Movie[]=[]; 
  top_ratedTvShows:TvShow[]=[] ; 
  constructor(private moviesService:MoviesService, private tvService:TvShowsService) { }

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((data:Movie[])=>{
      this.movies = data;
    }) ;
    this.moviesService.getMovies('upcoming').subscribe((data:Movie[])=>{
      this.upcomingMovies = data;
    }) ; 
    this.moviesService.getMovies('top_rated').subscribe((data:Movie[])=>{
      this.topRatedMovies = data;
    }) ;
    this.moviesService.getMovies('now_playing').subscribe((data:Movie[])=>{
      this.nowPlayingMovies = data;
    }) ;
    this.tvService.getTvShows('top_rated').subscribe((data)=>{
      console.log(data);
      this.top_ratedTvShows = data;
    }) ; 


  }

  // SubscribeMovieList(type:string){
  //   let myReponse:Movie[]=[];
  //   this.moviesService.getMovies(type).subscribe((response:any)=>{
  //     myReponse = response.results;
  //     console.log(myReponse);
  //     this.dataInit
  //   })
  //   console.log(myReponse);
  // }

  // dataInit(val:any){

  // }

}

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
  popularMovies:Movie[]=[]; 
  upcomingMovies:Movie[]=[]; 
  topRatedMovies:Movie[]=[]; 
  nowPlayingMovies:Movie[]=[]; 
  latestMovies:Movie[]=[]; 
  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((data:any)=>{
      this.movies = data.results;
    }) ;
    this.moviesService.getMovies('upcoming').subscribe((data:any)=>{
      this.upcomingMovies = data.results;
    }) ; 
    this.moviesService.getMovies('top_rated').subscribe((data:any)=>{
      this.topRatedMovies = data.results;
    }) ;
    this.moviesService.getMovies('now_playing').subscribe((data:any)=>{
      this.nowPlayingMovies = data.results;
    }) ;
    this.moviesService.getMovies('latest').subscribe((data:any)=>{
      this.latestMovies = data.results;
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

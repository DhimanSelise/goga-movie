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
  upcomingMovies:Movie[]=[]; 
  topRatedMovies:Movie[]=[]; 
  nowPlayingMovies:Movie[]=[]; 
  constructor(private moviesService:MoviesService) { }

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

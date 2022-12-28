import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Genre, Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  
  constructor(private http:HttpClient) { }

  getGenreList(){
    return this.http.get<Genre[]>('https://api.themoviedb.org/3/genre/movie/list?api_key=e6eb5745461bbf7b1fc633db5e26b268').pipe(
      map((response:any)=>{
        return response.genres;
      }));
  }

  getMoveByGenreId(genreId:number){
    return this.http.get<Movie[]>('https://api.themoviedb.org/3/discover/movie?with_genres='+genreId+'&page=1&api_key=e6eb5745461bbf7b1fc633db5e26b268').pipe(
      map((response:any)=>{
        return response.results;
      }));
  }
}

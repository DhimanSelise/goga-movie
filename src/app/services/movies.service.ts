import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
import { Movie, Photos, SingleMovie, Video, Videos } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl : string = 'https://api.themoviedb.org/3' ; 
  APIKey : string = '?api_key=e6eb5745461bbf7b1fc633db5e26b268'

  constructor(private http:HttpClient) { }

  getMovies(type:string){
    return this.http.get<Movie[]>(this.baseUrl+'/movie/'+type+this.APIKey).pipe(
      map((response:any)=>{
        return response.results;
      })
    )
  }

  getMovie(id:string){
    return this.http.get<SingleMovie>(this.baseUrl+'/movie/'+id+this.APIKey)
  }

  getVideos(id:string){
    return this.http.get<Video[]>(this.baseUrl+'/movie/'+id+'/videos'+this.APIKey).pipe(
      map((response:any)=>{
        return response.results;
      })
    )
  }

  getPhotos(id:string){
    return this.http.get<Photos>(this.baseUrl+'/movie/'+id+'/images'+this.APIKey);
  }

  // Helper fucntion
}

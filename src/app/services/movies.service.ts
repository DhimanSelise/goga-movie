import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl : string = 'https://api.themoviedb.org/3' ; 
  APIKey : string = '?api_key=e6eb5745461bbf7b1fc633db5e26b268'

  constructor(private http:HttpClient) { }

  getMovies(){
    return this.http.get(this.baseUrl+'/movie/upcoming'+this.APIKey); 
  }

  // Helper fucntion
}

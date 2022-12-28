import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  baseUrl : string = 'https://api.themoviedb.org/3' ; 
  APIKey : string = '?api_key=e6eb5745461bbf7b1fc633db5e26b268'
  constructor(private http:HttpClient) { }

  getTvShows(type:string){
    console.log(this.baseUrl+'/tv/'+type+this.APIKey) ; 
    return this.http.get<any>(this.baseUrl+'/tv/'+type+this.APIKey).pipe(
      map((response:any)=>{
        return response.results;
      })
    )
  }

}

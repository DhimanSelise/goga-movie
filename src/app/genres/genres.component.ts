import { Component, OnInit } from '@angular/core';
import { Genre, Movie } from '../models/movie';
import { GenresService } from '../services/genres.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  Genres:Genre[]=[];
  MoviesByGenre:Movie[]=[];
  nameAgeMapping = new Map<number, string>();
  constructor(private genreService:GenresService) {
    genreService.getGenreList().subscribe((data:Genre[])=>{
      this.Genres = data;
      for(let i=0 ; i < data.length ; i++){
        this.nameAgeMapping.set(data[i].id, data[i].name);
      }
      // console.log(this.nameAgeMapping.get(28))
    })
   }

  ngOnInit(): void {
    
  }

  getMovieByGenre(genreId:number){
    this.genreService.getMoveByGenreId(genreId).subscribe((data:Movie[])=>{
      this.MoviesByGenre = data;
    })
  }

}

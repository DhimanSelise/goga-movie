import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-genres-holder',
  templateUrl: './genres-holder.component.html',
  styleUrls: ['./genres-holder.component.scss']
})
export class GenresHolderComponent implements OnInit {
  GenresMovies:Movie[]=[];
  constructor(private route:ActivatedRoute,private genresServie:GenresService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id})=>{
      this.genresServie.getMoveByGenreId(id).subscribe((data:Movie[])=>{
        this.GenresMovies = data;
      })
    })
  }

}

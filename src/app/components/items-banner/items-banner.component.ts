import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent {
  @Input() showableMovieNumber:number = 12;
  @Input() items:Movie[]=[];
  @Input() movieType:string | null = null;
  @Input() numberOfMoviesInARow:number = 6;
  
}

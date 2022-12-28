import { Component, Input, OnInit } from '@angular/core';
import { TvShow } from 'src/app/models/tv-show';

@Component({
  selector: 'app-items-tv-banner',
  templateUrl: './items-tv-banner.component.html',
  styleUrls: ['./items-tv-banner.component.scss']
})
export class ItemsTvBannerComponent implements OnInit {
  @Input() showableMovieNumber:number = 20;
  @Input() items:(TvShow[])=[];
  @Input() tvShowType:string | null = null;
  @Input() numberOfMoviesInARow:number = 5;
  constructor() { }

  ngOnInit(): void {
  }

}

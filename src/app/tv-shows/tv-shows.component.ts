import { Component, OnInit } from '@angular/core';
import { TvShow } from '../models/tv-show';
import { TvShowsService } from '../services/tv-shows.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  popularTvShows:TvShow[]=[];
  top_ratedTvShows:TvShow[]=[];
  on_the_airTvShows:TvShow[]=[];
  airing_todayTvShows:TvShow[]=[];


  constructor(private tvService:TvShowsService) { }

  ngOnInit(): void {
    this.tvService.getTvShows('popular').subscribe((data)=>{
      console.log(data);
      this.popularTvShows = data;
    }) ; 
    
    this.tvService.getTvShows('top_rated').subscribe((data)=>{
      console.log(data);
      this.top_ratedTvShows = data;
    }) ; 
    this.tvService.getTvShows('on_the_air').subscribe((data)=>{
      console.log(data);
      this.on_the_airTvShows = data;
    }) ; 
    this.tvService.getTvShows('airing_today').subscribe((data)=>{
      console.log(data);
      this.airing_todayTvShows = data;
    }) ; 

  }

}

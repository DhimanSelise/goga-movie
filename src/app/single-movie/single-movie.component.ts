import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss'] , 
  encapsulation: ViewEncapsulation.None
})
export class SingleMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

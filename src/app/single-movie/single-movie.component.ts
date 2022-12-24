import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss'] , 
  encapsulation: ViewEncapsulation.None
})
export class SingleMovieComponent implements OnInit {


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id})=>{
      console.log(id) ; 
    });
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/models/movie';

@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.scss']
})
export class CastsComponent implements OnInit {
  @Input() casts:Cast[]=[];
  responsiveOptions : any;
  constructor() { 
    this.responsiveOptions = [
      {
          breakpoint: '960px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
  }

}

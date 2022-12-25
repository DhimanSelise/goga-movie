import { Component, Input, OnInit } from '@angular/core';
import { Crew } from 'src/app/models/movie';

@Component({
  selector: 'app-crews',
  templateUrl: './crews.component.html',
  styleUrls: ['./crews.component.scss']
})
export class CrewsComponent implements OnInit {
  @Input() crews:Crew[]=[];
  responsiveOptions : any;
  constructor() { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
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

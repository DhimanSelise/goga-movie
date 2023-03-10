import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit , AfterViewInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade',[
      state('void',style({
        opacity:0
      })),
      transition('void => *' , [animate('1s')]),
      transition('* => void' , [animate('500ms')]),

    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items:Movie[] = [];
  currentIndex:number = 0 ; 
  constructor() { }
  ngOnInit(): void {
    this.RunSlider();
  }

  RunSlider():void{
    setInterval(()=>{
      this.currentIndex = ++this.currentIndex%this.items.length;
    },3500);
  }

}

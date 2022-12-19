import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit , AfterViewInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fade',[
      state('void',style({
        opacity:0
      })),
      transition('void => *' , [animate('1s')]),
      transition('* => void' , [animate('500ms')]),

    ])
  ]
})
export class SliderComponent implements OnInit ,AfterViewInit{
  @Input() items:Movie[] = [];
  currentIndex = 0 ; 
  constructor() { }
  ngOnInit(): void {
    console.log(this.items);
    // this.makeDelay();
  }
  ngAfterViewInit():void{
    console.log('after',this.items);
  }

  // makeDelay(){
  //   while(true){
  //     setTimeout(()=>{
  //       this.currentIndex++;
  //       this.currentIndex%=20; 
  //       console.log(this.currentIndex); 
  //     },2000)
  //   }
  // }

}

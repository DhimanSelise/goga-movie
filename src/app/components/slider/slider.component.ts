import { Component, Input, OnInit , AfterViewInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
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

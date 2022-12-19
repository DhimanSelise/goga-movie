import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [DatePipe]
})
export class FooterComponent implements OnInit {
  currentDate = new Date();
  constructor(private datePipe: DatePipe) {
    
   }

  ngOnInit(): void {
  }

   

}

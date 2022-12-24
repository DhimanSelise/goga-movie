import { Component, Input, OnInit } from '@angular/core';
import { ImageDetails } from 'src/app/models/movie';

@Component({
  selector: 'app-image-galary',
  templateUrl: './image-galary.component.html',
  styleUrls: ['./image-galary.component.scss']
})
export class ImageGalaryComponent implements OnInit {
  @Input()
  imageDetails: ImageDetails[] = []; 

  constructor() { }

  ngOnInit(): void {
  }

}

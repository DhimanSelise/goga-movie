import { Component, Input, OnInit } from '@angular/core';
import { TvShow } from 'src/app/models/tv-show';

@Component({
  selector: 'app-tv-item',
  templateUrl: './tv-item.component.html',
  styleUrls: ['./tv-item.component.scss']
})
export class TvItemComponent implements OnInit {
  @Input() item:TvShow | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-embed-video',
  templateUrl: './embed-video.component.html',
  styleUrls: ['./embed-video.component.scss']
})
export class EmbedVideoComponent implements OnInit {
  // @Input() video:Video | null = null;
  @Input() key:string = '';
  @Input() site:string = '';
  
  videoURL:SafeResourceUrl = '' ; 
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.videoURL = this.getSafeURL("https://www.youtube.com/embed/"+this.key) ; 
  }

  getSafeURL(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

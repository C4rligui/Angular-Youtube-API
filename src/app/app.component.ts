import { Component, ElementRef, ViewChild } from "@angular/core";
import { YoutubeService } from "./services/youtube.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  videos:any

  @ViewChild('videoName') videoName!: ElementRef;

  constructor(private youtube:YoutubeService) {}

  ngOnInit() {
  }

  getData() {
    var videoName = this.videoName.nativeElement.value

    this.youtube.getVideos(videoName).subscribe((data) => {
      console.log(data)
      this.videos = data.items
    })
  }

}
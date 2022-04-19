import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient) { }

  getVideos(videoName:string):Observable<any> {
    
    const API_KEY = "AIzaSyBE9r4Vvv62VILp6k-RVeKMdDNxgAx_b2o";

    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+videoName+"&type=bideo&key="+API_KEY+"&maxResuls=50"

    return this.http.get<any>(url)

  }

}
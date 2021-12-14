import { Component, OnInit } from '@angular/core';
import { Recommendation } from './recommendation.model';
import { RecommendationService } from '../recommendation.service';

@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.css']
})
export class RecommenderComponent implements OnInit {

  constructor(private recommendationService: RecommendationService) { }

  ngOnInit(): void {
  }

  APIKey: string = "428679-AngularS-W7UIM26X";

  // artist input by user
  artistName: string = "";

  // fill with returned recommended artists
  recommended: Recommendation[] = [];

  onSelect(){
    let parsedArtist: string = this.artistName.split(' ').join('+');
    console.log("Converted Name: ", parsedArtist);

    if(!this.artistName) return;

    let getReq: string = "https://tastedive.com/api/similar?q=" + parsedArtist + "&type=music&info=1&limit=3&k=" + this.APIKey
    
    //set recommended list to api call
    this.recommendationService.getRecommendations(getReq).subscribe(payload => {
      this.recommended = payload.Similar.Results;
    });
  }

}

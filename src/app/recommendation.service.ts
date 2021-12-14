import { Injectable } from '@angular/core';
import { Recommendation } from './recommender/recommendation.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor(private http: HttpClient) { }

  getRecommendations(getReq: string): Observable<any> {
    const data = this.http.get(getReq);
    return data;
  }

}

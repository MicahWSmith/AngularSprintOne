import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private http: HttpClient) { }

  getFinances(): Observable<any> {
    const data = this.http.get("https://financial-json.web.app/finance.json");
    return data;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facts } from '../models/facts.model';

@Injectable({
  providedIn: 'root',
})
export class CatFactsService {
  private baseApiUrl = 'https://cat-fact.herokuapp.com';

  constructor(private httpClient: HttpClient) {}

  getCatFacts(): Observable<Facts> {
    return this.httpClient.get<Facts>(this.baseApiUrl + '/facts');
  }
}

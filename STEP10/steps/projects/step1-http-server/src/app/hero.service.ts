import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroHtttpServices {
  constructor(private http: HttpClient) {}
  getHeroData() {
    return this.http.get('http://localhost:5050/');
  }
}

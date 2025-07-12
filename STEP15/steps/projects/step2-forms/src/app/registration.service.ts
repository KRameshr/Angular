import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private _http: HttpClient) {}

  _url = 'http://localhost:3200/saveData';
  postData(
    data: Partial<{ studentName: string | null; studentEmail: string | null }>
  ) {
    return this._http.post(this._url, data);
  }
}

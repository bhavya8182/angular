import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonService {
  constructor(private http: Http) {}

  getJson(json: string) {
    return this.makeRequest(`data.${json}`);
  }

  private makeRequest(path: string) {
    return this.http.get('http://localhost:3000/data.json')
      .map((res) => res.json());
  }
}

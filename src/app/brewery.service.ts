import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

@Injectable()
export class BreweryService {

  constructor(private http: HttpClient) { }

  getBreweries() {
    const url = `/brewery`;
    return this.http.get(url).map(res => {
      return res;
    });
  }

  getBrewery(id: number) {
    const url = `/brewery/brewdetail/${id}`;
    return this.http.get(url).map(res => {
      return res[0][0];
    });
  }
}
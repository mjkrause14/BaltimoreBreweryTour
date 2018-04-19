import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Beer } from './beer'

@Injectable()
export class BeerService {

  constructor(private http: HttpClient) { }

  getBeers(id: number) {
    const url = `/brewery/brewdetail/${id}`;
    return this.http.get(url).map(res => {
      return res[1][0];
    });
  }
}

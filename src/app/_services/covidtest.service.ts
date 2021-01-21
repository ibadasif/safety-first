import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CovidtestService {
  endpoint = environment.APIEndpoint;
  constructor(private http: HttpClient) {}

  getCovid1() {
    return this.http.get<any>(this.endpoint + '/getCovidOne');
  }

  getCovid2() {
    return this.http.get<any>(this.endpoint + '/getCovidTwo');
  }

  getCovid3() {
    return this.http.get<any>(this.endpoint + '/getCovidThree');
  }
  createCovid1(covid1: any) {
    return this.http.post(this.endpoint + "/covidOne", covid1);
  }
  createCovid2(covid2: any) {
    return this.http.post(this.endpoint + "/covidTwo", covid2);
  }
  createCovid3(covid3: any) {
    return this.http.post(this.endpoint + "/covidThree", covid3);
  }
}

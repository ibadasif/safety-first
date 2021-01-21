import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  endpoint = environment.APIEndpoint;
  constructor(private http: HttpClient) { }
  getAllDoctors() {
    return this.http.get<any>(this.endpoint + "/doctors");
}
createDoctor(doctor: any) {
  return this.http.post(this.endpoint + "/doctor", doctor);
}

}

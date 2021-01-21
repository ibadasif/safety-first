import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  endpoint = environment.APIEndpoint;

  constructor(private http: HttpClient, private router: Router) {}
  isAuthenticated(): boolean {
    return (
      localStorage.getItem('loggedInUser') != null && !this.isTokenExpired()
    );
  }

  isTokenExpired(): boolean {
    return false;
  }

  decode(): any {
    return JSON.parse(localStorage.getItem('loggedInUser'));
  }

  decodeUser(): any {
    return JSON.parse(localStorage.getItem('loggedInUser')).user;
  }
  login(phone: string, password: string): Observable<HttpResponse<any>> {
    let user = { phone: phone, password: password };
    return this.http.post<any>(this.endpoint + '/login', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response',
    });
  }

  register(user: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.endpoint + '/register', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: 'response',
    });
  }
  clear(): void {
    localStorage.clear();
  }

  logout(): void {
    this.clear();
    this.router.navigate(['/home'], {
      queryParams: { success: 'You have been logged out successfully.' },
    });
  }
}

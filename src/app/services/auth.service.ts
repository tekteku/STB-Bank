import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface SystemInfo {
  currentDateTime: string;
  userLogin: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private systemInfo = new BehaviorSubject<SystemInfo>({
    currentDateTime: '2024-12-06 23:00:10',
    userLogin: 'tekteku'
  });
  private apiUrl = 'https://your-backend-api.com/auth';
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient, private router: Router) {
    // Update datetime every second
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  private updateDateTime() {
    const now = new Date();
    this.systemInfo.next({
      ...this.systemInfo.value,
      currentDateTime: now.toISOString().replace('T', ' ').slice(0, 19)
    });
  }

  getSystemInfo(): Observable<SystemInfo> {
    return this.systemInfo.asObservable();
  }

  getCurrentDateTime(): string {
    return this.systemInfo.value.currentDateTime;
  }

  getUserLogin(): string {
    return this.systemInfo.value.userLogin;
  }

  isLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem(this.tokenKey);
    return of(!!token);
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem(this.tokenKey, response.token);
          this.router.navigate(['/accueil']);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}
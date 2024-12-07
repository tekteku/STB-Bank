import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {
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
}
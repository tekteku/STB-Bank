import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-header>
        <ion-toolbar>
          <div class="system-info">
            <p>Current Date and Time (UTC): {{ currentDateTime }}</p>
            <p>Current User's Login: {{ userLogin }}</p>
          </div>
        </ion-toolbar>
      </ion-header>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  styles: [`
    .system-info {
      padding: 10px;
      text-align: center;
      background: var(--ion-color-light);
    }
    .system-info p {
      margin: 5px 0;
      font-size: 0.9em;
    }
  `],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterOutlet]
})
export class AppComponent {
  currentDateTime: string = '2024-12-06 23:03:20';
  userLogin: string = 'tekteku';

  constructor(private authService: AuthService) {
    this.authService.getSystemInfo().subscribe(info => {
      this.currentDateTime = info.currentDateTime;
      this.userLogin = info.userLogin;
      console.log(info.currentDateTime, info.userLogin);
    });
  }
}
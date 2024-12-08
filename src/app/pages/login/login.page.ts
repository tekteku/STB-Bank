import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonText,
  IonImg,
  IonRow,
  IonCol,
  IonGrid
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { lockClosedOutline, mailOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonText,
    IonImg,
    IonRow,
    IonCol,
    IonGrid
  ]
})
export class LoginPage {
  credentials = {
    email: '',
    password: ''
  };
  showPassword = false;

  constructor(private router: Router) {
    addIcons({
      lockClosedOutline,
      mailOutline,
      eyeOutline,
      eyeOffOutline
    });
  }

  onLogin() {
    // For demo purposes, navigate to accueil
    this.router.navigate(['/accueil']);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
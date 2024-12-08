import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonButton,
  IonIcon,
  IonAvatar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonFooter,
  IonBackButton,
  IonButtons,
  IonBadge,
  IonNote,
  IonChip
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  lockClosedOutline,
  notificationsOutline,
  mailOutline,
  personOutline,
  shieldCheckmarkOutline,
  cardOutline,
  copyOutline,
  logOutOutline,
  chevronForwardOutline,
  moonOutline,
  languageOutline,
  helpCircleOutline,
  alertCircleOutline
} from 'ionicons/icons';

interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  photoUrl: string;
  accountNumber: string;
  iban: string;
  bic: string;
  status: 'active' | 'inactive';
  lastLogin: Date;
  preferences: {
    twoFactorEnabled: boolean;
    darkMode: boolean;
    notifications: boolean;
    language: string;
  }
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonToggle,
    IonButton,
    IonIcon,
    IonAvatar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonFooter,
    IonBackButton,
    IonButtons,
    IonBadge,
    IonNote,
    IonChip
  ]
})
export class ProfilPage {
  userProfile: UserProfile = {
    id: '123456',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+33 6 12 34 56 78',
    address: '123 Rue de Paris, 75001 Paris',
    photoUrl: 'assets/avatar-placeholder.png',
    accountNumber: 'FR76 1234 5678 9012 3456',
    iban: 'FR76 1234 5678 9012 3456 7890 123',
    bic: 'STBFRPPXXX',
    status: 'active',
    lastLogin: new Date(),
    preferences: {
      twoFactorEnabled: true,
      darkMode: false,
      notifications: true,
      language: 'fr'
    }
  };

  constructor(private router: Router) {
    addIcons({
      lockClosedOutline,
      notificationsOutline,
      mailOutline,
      personOutline,
      shieldCheckmarkOutline,
      cardOutline,
      copyOutline,
      logOutOutline,
      chevronForwardOutline,
      moonOutline,
      languageOutline,
      helpCircleOutline,
      alertCircleOutline
    });
  }

  async copyToClipboard(text: string) {
    await navigator.clipboard.writeText(text);
    // You could add a toast notification here
  }

  updatePreference<K extends keyof UserProfile['preferences']>(
    key: K,
    value: UserProfile['preferences'][K]
  ) {
    this.userProfile.preferences[key] = value;
    // Add your save logic here
  }

  logout() {
    this.router.navigate(['/login']);
  }

  async takePicture() {
    // Implement camera/gallery logic here
  }

  changePassword() {
    // Implement password change logic
  }

  manageTwoFactor() {
    // Implement 2FA management
  }
}
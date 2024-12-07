import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterLink
  ]
})
export class ProfilPage {
  userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+33 6 12 34 56 78',
    address: '123 Rue de Paris, 75001 Paris',
    photoUrl: '',
    memberSince: new Date('2023-01-01'),
    accountNumber: 'FR76 1234 5678 9012 3456',
    iban: 'FR76 1234 5678 9012 3456 7890 123',
    twoFactorEnabled: false,
    pushNotifications: true,
    emailNotifications: true
  };

  darkMode: boolean = false;

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  changePassword() {
    // Implementation for password change
  }

  manageTwoFactor() {
    // Implementation for 2FA management
  }

  deviceManagement() {
    // Implementation for device management
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    // Add logic to actually change the theme
  }

  logout() {
    // Implementation for logout
  }
}
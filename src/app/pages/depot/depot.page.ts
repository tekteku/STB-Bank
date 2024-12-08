import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonIcon,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonFooter,
  IonText
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  cardOutline, 
  cashOutline, 
  documentTextOutline,
  copyOutline,
  locationOutline,
  chevronForwardOutline,
  arrowBackOutline
} from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonIcon,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonFooter,
    IonText
  ]
})
export class DepotPage {
  amount: number = 0;
  depositMethod: 'card' | 'transfer' | 'cash' = 'card';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';
  bankDetails = {
    iban: 'FR76 3000 1007 1234 5678 9012 345',
    bic: 'STBFRPPXXX'
  };

  constructor() {
    addIcons({
      cardOutline,
      cashOutline,
      documentTextOutline,
      copyOutline,
      locationOutline,
      chevronForwardOutline,
      arrowBackOutline
    });
  }

  async copyBankDetails() {
    const details = `IBAN: ${this.bankDetails.iban}\nBIC: ${this.bankDetails.bic}`;
    await navigator.clipboard.writeText(details);
    // You could add a toast notification here
  }

  showBranches() {
    // Implement branch locator functionality
  }

  processDeposit() {
    // Implement deposit logic
    console.log('Processing deposit:', {
      amount: this.amount,
      method: this.depositMethod,
      cardDetails: this.depositMethod === 'card' ? {
        number: this.cardNumber,
        expiry: this.expiryDate,
        cvv: this.cvv
      } : null
    });
  }

  isValidDeposit(): boolean {
    if (this.amount <= 0) return false;
    
    if (this.depositMethod === 'card') {
      return Boolean(
        this.cardNumber?.length === 16 &&
        this.expiryDate?.length === 5 &&
        this.cvv?.length === 3
      );
    }
    
    return true;
  }

  formatCardNumber(event: any) {
    let input = event.target.value.replace(/\D/g, '');
    input = input.substring(0, 16);
    const groups = input.match(/(\d{4})/g);
    if (groups) {
      this.cardNumber = groups.join(' ');
    } else {
      this.cardNumber = input;
    }
  }

  formatExpiryDate(event: any) {
    let input = event.target.value.replace(/\D/g, '');
    if (input.length >= 2) {
      this.expiryDate = `${input.substring(0, 2)}/${input.substring(2, 4)}`;
    } else {
      this.expiryDate = input;
    }
  }
}
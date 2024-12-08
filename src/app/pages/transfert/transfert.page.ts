import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  IonSelect,
  IonSelectOption,
  IonButton,
  IonIcon,
  IonBackButton,
  IonButtons,
  IonChip,
  IonFooter,
  IonTextarea, IonList } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  arrowBackOutline, 
  cardOutline, 
  cashOutline, 
  sendOutline, 
  personOutline, documentTextOutline, chatboxOutline } from 'ionicons/icons';

interface Beneficiary {
  id: string;
  name: string;
  accountNumber: string;
  bankName: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.page.html',
  styleUrls: ['./transfert.page.scss'],
  standalone: true,
  imports: [IonList, 
    CommonModule,
    FormsModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonIcon,
    IonBackButton,
    IonButtons,
    IonChip,
    IonFooter,
    IonTextarea
  ]
})
export class TransfertPage {
  amount: number = 0;
  selectedBeneficiary: string = '';
  transferReason: string = '';
  message: string = '';
  quickAmounts: number[] = [50, 100, 200, 500, 1000];

  beneficiaries: Beneficiary[] = [
    {
      id: '1',
      name: 'Sarah Martin',
      accountNumber: 'FR76 1234 5678 9012 3456',
      bankName: 'BNP Paribas',
      isFavorite: true
    },
    {
      id: '2',
      name: 'Thomas Dubois',
      accountNumber: 'FR76 9876 5432 1098 7654',
      bankName: 'Société Générale',
      isFavorite: true
    }
  ];

  constructor() {
    addIcons({personOutline,documentTextOutline,chatboxOutline,arrowBackOutline,cardOutline,cashOutline,sendOutline});
  }

  selectAmount(amount: number) {
    this.amount = amount;
  }

  async confirmTransfer() {
    if (!this.isValidTransfer()) return;
    
    // Here you would implement your transfer logic
    console.log('Transfer details:', {
      amount: this.amount,
      beneficiary: this.selectedBeneficiary,
      reason: this.transferReason,
      message: this.message
    });
  }

  isValidTransfer(): boolean {
    return this.amount > 0 && 
           this.selectedBeneficiary !== '' && 
           this.transferReason !== '';
  }

  formatAmount(amount: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  }

  getBeneficiaryById(id: string): Beneficiary | undefined {
    return this.beneficiaries.find(b => b.id === id);
  }
}
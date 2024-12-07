import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.page.html',
  styleUrls: ['./transfert.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterLink
  ]
})
export class TransfertPage {
  amount: number = 0;
  selectedBeneficiary: number | null = null;
  transferReason: string = '';
  message: string = '';
  
  quickAmounts: number[] = [50, 100, 200, 500, 1000];
  
  beneficiaries = [
    { id: 1, name: 'Jean Dupont', accountNumber: 'FR76 1234 5678 9012' },
    { id: 2, name: 'Marie Martin', accountNumber: 'FR76 2345 6789 0123' }
  ];

  selectAmount(amount: number) {
    this.amount = amount;
  }

  confirmTransfer() {
    // Implementation for transfer confirmation
    console.log('Transfer confirmed:', {
      amount: this.amount,
      beneficiary: this.selectedBeneficiary,
      reason: this.transferReason
    });
  }

  isValidTransfer(): boolean {
    return this.amount > 0 && this.selectedBeneficiary !== null;
  }
}
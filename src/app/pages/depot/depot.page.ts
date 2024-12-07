import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterLink
  ]
})
export class DepotPage {
  amount: number = 0;
  depositMethod: string = 'card';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';

  showBranches() {
    // Logic to show branches
  }

  processDeposit() {
    // Logic to process deposit
  }

  isValidDeposit(): boolean {
    // Logic to validate deposit
    return this.amount > 0 && this.cardNumber.length === 16 && this.cvv.length === 3;
  }

  copyBankDetails() {
    // Implementation for copying bank details
    const bankDetails = 'Your bank details here';
    navigator.clipboard.writeText(bankDetails);
  }

  // ... rest of the component code
}
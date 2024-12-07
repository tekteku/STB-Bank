import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterLink
  ]
})
export class RetraitPage {
  amount: number = 0;
  selectedMethod: string = 'atm';
  quickAmounts: number[] = [20, 50, 100, 200, 500];

  selectAmount(amount: number) {
    this.amount = amount;
  }

  confirmWithdrawal() {
    // Implementation for withdrawal confirmation
    console.log('Withdrawal confirmed:', this.amount);
  }

  isValidWithdrawal(): boolean {
    return this.amount > 0;
  }

  // ... rest of the component code
}
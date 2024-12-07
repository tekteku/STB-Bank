import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterLink
  ]
})
export class AccueilPage {
  recentTransactions = [
    {
      icon: 'arrow-down',
      title: 'Dépôt reçu',
      date: '6 Dec 2024',
      amount: '+€500.00',
      type: 'credit',
      color: 'success'
    },
    // ...existing transactions...
  ];
}
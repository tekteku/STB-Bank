import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
  IonMenuButton,
  IonBadge, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  personCircleOutline,
  sendOutline,
  addCircleOutline,
  cashOutline,
  timeOutline,
  arrowUpOutline,
  arrowDownOutline,
  swapHorizontalOutline,
  notificationsOutline, chevronForwardOutline } from 'ionicons/icons';

interface Transaction {
  id: number;
  title: string;
  amount: string;
  date: string;
  type: 'credit' | 'debit';
  icon: string;
  color: string;
  category: string;
}

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [IonText, 
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonMenuButton,
    IonBadge
  ]
})
export class AccueilPage {
  accountBalance = 10000.00;
  showBalance = true;
  notifications = 3;

  quickActions = [
    { title: 'Transfert', icon: 'send-outline', route: '/transfert', color: 'primary' },
    { title: 'Dépôt', icon: 'add-circle-outline', route: '/depot', color: 'success' },
    { title: 'Retrait', icon: 'cash-outline', route: '/retrait', color: 'warning' },
    { title: 'Historique', icon: 'time-outline', route: '/historique', color: 'tertiary' }
  ];

  recentTransactions: Transaction[] = [
    {
      id: 1,
      title: 'Dépôt Espèces',
      amount: '+€1,500.00',
      date: '2024-12-08',
      type: 'credit',
      icon: 'arrow-down-outline',
      color: 'success',
      category: 'Dépôt'
    },
    {
      id: 2,
      title: 'Paiement Loyer',
      amount: '-€800.00',
      date: '2024-12-07',
      type: 'debit',
      icon: 'arrow-up-outline',
      color: 'danger',
      category: 'Logement'
    },
    {
      id: 3,
      title: 'Virement reçu',
      amount: '+€350.00',
      date: '2024-12-06',
      type: 'credit',
      icon: 'swap-horizontal-outline',
      color: 'primary',
      category: 'Virement'
    }
  ];

  constructor() {
    addIcons({notificationsOutline,personCircleOutline,chevronForwardOutline,sendOutline,addCircleOutline,cashOutline,timeOutline,arrowUpOutline,arrowDownOutline,swapHorizontalOutline});
  }

  toggleBalance() {
    this.showBalance = !this.showBalance;
  }

  formatBalance(balance: number): string {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(balance);
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short'
    });
  }
}
import { Component } from '@angular/core';
import { IonCardSubtitle } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardContent, IonBackButton, IonButtons, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardContent, IonButtons, IonInput],
})
export class HomePage {

  precio: number = 329.00

  numero: number = 0;
  resta(): void{
    if (this.numero > 0) {
      this.numero--;
    }
    
  }
  sum(): void{
    this.numero++;
  }

  constructor() {}
}

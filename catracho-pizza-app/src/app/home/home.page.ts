import { Component } from '@angular/core';
import { IonCardSubtitle, AlertController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardContent, IonBackButton, IonButtons, IonInput, IonList, IonItem, IonAlert } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
  
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardContent, IonButtons, IonInput, IonList, IonItem, IonAlert],
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



  constructor(public alertController: AlertController) {}
  async mostrarAlerta(){
    /* En este método es para mandar un mensaje cuando el usuario compre si el producto es mayor que 0
       entonces la alerta se activa si es 0 no se activa el mensaje.*/
    if(this.numero > 0){
      const alert = await this.alertController.create({
        header:'Producto Agregado',
        message: 'Ha agregado correctamente el producto a su carrito',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
   

   

  }

}

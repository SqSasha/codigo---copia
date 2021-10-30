import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recupdato',
  templateUrl: './recupdato.page.html',
  styleUrls: ['./recupdato.page.scss'],
})
export class RecupdatoPage implements OnInit {

  constructor(private router: Router,
     private toastController: ToastController) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/login']);
  }
  home(){
    this.router.navigate(['/home']);
  }

}

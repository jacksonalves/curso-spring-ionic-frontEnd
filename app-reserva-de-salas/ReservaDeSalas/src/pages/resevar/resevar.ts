import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservaService } from '../../services/domain/reserva.service';


@IonicPage()
@Component({
  selector: 'page-resevar',
  templateUrl: 'resevar.html',
})
export class ResevarPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public reservaService : ReservaService) {
  }

  ionViewDidLoad() {
    this.reservaService.findAll()
    .subscribe(response => {
      console.log(response);
    },
    error =>{
      console.log(error);
    });
  }

}

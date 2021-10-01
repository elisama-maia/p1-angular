import { Component, OnInit } from '@angular/core';
import { ElisamaWalletService } from '../elisama-wallet.service';

@Component({
  selector: 'app-elisama-currency',
  templateUrl: './elisama-currency.component.html',
  styleUrls: ['./elisama-currency.component.css']
})
export class ElisamaCurrencyComponent implements OnInit {

  constructor(public walletService: ElisamaWalletService) { }

  ngOnInit() {
    this.walletService.getRates();
    this.walletService.start();
  }

}
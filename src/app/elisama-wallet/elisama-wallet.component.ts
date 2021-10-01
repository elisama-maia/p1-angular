import { Component, OnInit } from '@angular/core';
import { ElisamaWalletService } from '../elisama-wallet.service';

@Component({
  selector: 'app-elisama-wallet',
  templateUrl: './elisama-wallet.component.html',
  styleUrls: ['./elisama-wallet.component.css'],
})
export class ElisamaWalletComponent implements OnInit {
  totalBitcoin: number = 0;
  totalReal: number = 0;

  constructor(public walletService: ElisamaWalletService) {}

  ngOnInit() {
    this.walletService.getRates();
  }

  add(value: string) {
    if (value !== '') {
      this.totalBitcoin += parseInt(value);
      this.totalReal =
        this.totalBitcoin * this.walletService.currentPrice.bpi.BRL.rate_float;
    }
  }

  remove(value: string) {
    if (value !== '') {
      if (this.totalBitcoin - parseInt(value) >= 0) {
        this.totalBitcoin -= parseInt(value);
        this.totalReal =
          this.totalBitcoin *
          this.walletService.currentPrice.bpi.BRL.rate_float;
      } else {
        this.totalBitcoin = 0;
        this.totalReal = 0;
      }
    }
  }
}

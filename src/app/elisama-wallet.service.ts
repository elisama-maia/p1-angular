import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
  time: {
    updated: string;
  };
  bpi: {
    BRL: {
      rate_float: number;
    };
    USD: {
      rate_float: number;
    };
    EUR: {
      rate_float: number;
    };
  };
}

@Injectable()
export class ElisamaWalletService {
  updateRates: Array<Response> = [];
  updateBrl: Array<Response> = [];
  currentPrice: Response;

  timer: any;

  constructor(private http: HttpClient) {}

  getRates() {
    this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice.json')
      .subscribe((data) => {
        if (data) {
          this.updateRates.push(data);
        }
      });

    if (this.updateRates.length !== 0) {
      this.http
        .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
        .subscribe((data) => {
          this.currentPrice = data;
          this.updateBrl.push(data);
        });
    }
  }

  start() {
    if (!this.timer) {
      this.getRates();
      this.timer = setInterval(() => {
        this.getRates();
      }, 60000);
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }
}

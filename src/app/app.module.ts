import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ElisamaWalletService } from './elisama-wallet.service';
import { ElisamaCurrencyComponent } from './elisama-currency/elisama-currency.component';
import { ElisamaWalletComponent } from './elisama-wallet/elisama-wallet.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    { path: 'elisama-wallet', component: ElisamaWalletComponent},
    { path: 'elisama-currency', component: ElisamaCurrencyComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, ElisamaCurrencyComponent, ElisamaWalletComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ElisamaWalletService]
})
export class AppModule { }

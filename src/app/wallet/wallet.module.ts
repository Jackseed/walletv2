import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnemonicComponent } from './containers/mnemonic/mnemonic.component';
import { WalletComponent } from './containers/wallet/wallet.component';

@NgModule({
  declarations: [MnemonicComponent, WalletComponent],
  exports: [MnemonicComponent, WalletComponent],
  imports: [
    CommonModule
  ]
})
export class WalletModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnemonicComponent } from './containers/mnemonic/mnemonic.component';
import { WalletComponent } from './containers/wallet/wallet.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MnemonicComponent, WalletComponent],
  exports: [MnemonicComponent, WalletComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class WalletModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnemonicComponent } from './containers/mnemonic/mnemonic.component';

@NgModule({
  declarations: [MnemonicComponent],
  exports: [MnemonicComponent],
  imports: [
    CommonModule
  ]
})
export class WalletModule { }

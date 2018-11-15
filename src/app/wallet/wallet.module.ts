import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnemonicComponent, MnemonicDialogComponent } from './containers/mnemonic/mnemonic.component';
import { WalletComponent } from './containers/wallet/wallet.component';
import { TransactionComponent } from './containers/transaction/transaction.component';
import { VerificationComponent } from './containers/verification/verification.component';
import { UiModule } from '../ui/ui.module';
import { HomeComponent } from './containers/home/home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [MnemonicComponent, WalletComponent, TransactionComponent, VerificationComponent, HomeComponent, MnemonicDialogComponent],
  exports: [MnemonicComponent, WalletComponent, TransactionComponent, VerificationComponent, HomeComponent, MnemonicDialogComponent],
  imports: [
    CommonModule,
    UiModule,
    AppRoutingModule
  ],
  entryComponents: [MnemonicDialogComponent]
})

export class WalletModule { }

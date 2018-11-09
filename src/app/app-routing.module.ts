import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MnemonicComponent } from './wallet/containers/mnemonic/mnemonic.component';
import { VerificationComponent } from './wallet/containers/verification/verification.component';
import { WalletComponent } from './wallet/containers/wallet/wallet.component';
import { TransactionComponent } from './wallet/containers/transaction/transaction.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'mnemonic', component: MnemonicComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'transaction', component: TransactionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}




import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MnemonicComponent } from "./wallet/containers/mnemonic/mnemonic.component";
import { VerificationComponent } from "./wallet/containers/verification/verification.component";
import { WalletComponent } from "./wallet/containers/wallet/wallet.component";
import { TransactionComponent } from "./wallet/containers/transaction/transaction.component";
import { HomeComponent } from "./wallet/containers/home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "mnemonic", component: MnemonicComponent },
  { path: "verification", component: VerificationComponent },
  { path: "wallet", component: WalletComponent },
  { path: "transaction", component: TransactionComponent },
  {
    path: "**",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerificationComponent } from './wallet/containers/verification/verification.component';
import { WalletModule } from './wallet/wallet.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    VerificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WalletModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

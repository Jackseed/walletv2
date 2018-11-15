import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletModule } from './wallet/wallet.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { UiModule } from './ui/ui.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WalletModule,
    BrowserAnimationsModule,
    UiModule,
    FormsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

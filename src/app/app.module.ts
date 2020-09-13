import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WalletModule } from "./wallet/wallet.module";
import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "src/environments/environment";
import { UiModule } from "./ui/ui.module";
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";

const firebaseConfig = {
  apiKey: "AIzaSyDY75xixOc6B9j8i8HqhsfZgwQsYYk4A_A",
  authDomain: "midas-wallet.firebaseapp.com",
  databaseURL: "https://midas-wallet.firebaseio.com",
  projectId: "midas-wallet",
  storageBucket: "midas-wallet.appspot.com",
  messagingSenderId: "783434171001",
  appId: "1:783434171001:web:540db33f75ba3f4b80caa8"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
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
export class AppModule {}

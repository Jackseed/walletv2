import { Component, OnInit } from '@angular/core';
import { WalletQuery } from '../../+state';
import { Observable } from 'rxjs';
import { WalletService } from '../../+state';
import { Router } from '@angular/router';
import {ObservableMedia} from '@angular/flex-layout';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  public keystore$: Observable<string>;
  private mnemonicIDs = [];

  constructor(
    private query: WalletQuery,
    private service: WalletService,
    private router: Router,
    public media: ObservableMedia
  ) { }

  ngOnInit() {
    this.keystore$ = this.query.keystore$;
    this.service.pushLocalKeystoreToStore();
    this.getXRandomMnemonicsId(3);
  }

  public decryptKeystore(password: string) {
    this.service.decryptKeystore(this.query.keystore, password);
  }

  public getXRandomMnemonicsId(x: number) {
    this.mnemonicIDs = [];
    for (let i = 0; i < x; i++) {
      let rand: number = null;
      while (rand === null || this.mnemonicIDs.includes(rand) || rand === 0) {
        rand = Math.round(Math.random() * 12);
      }
      this.mnemonicIDs.push(rand);
    }
  }

  public passwordAndMnemonicsVerification(password: string, mnemonic1: string, mnemonic2: string, mnemonic3: string) {
    this.decryptKeystore(password);
    if (this.query.mnemonic !== '') {
      const mnemonics = this.query.mnemonic.split(' ');
      if (mnemonic1 === mnemonics[this.mnemonicIDs[0] - 1]) {
        if (mnemonic3 === mnemonics[this.mnemonicIDs[2] - 1]) {
          this.router.navigate(['/wallet']);
        }
      } else {
        console.log('One or more of your mnemonics is false.');
      }
    } else {
      console.log('Your password is incorrect.');
    }
  }

}

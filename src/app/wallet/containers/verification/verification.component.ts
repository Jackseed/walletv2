import { Component, OnInit } from '@angular/core';
import { WalletQuery } from '../../+state';
import { Observable } from 'rxjs';
import { WalletService } from '../../+state';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  public keystore$: Observable<string>;

  constructor(
    private query: WalletQuery,
    private service: WalletService
  ) { }

  ngOnInit() {
    this.keystore$ = this.query.keystore$;
    this.service.pushLocalKeystoreToStore();
  }

  public decryptKeystore(password: string) {
    this.service.decryptKeystore(this.query.keystore, password);
  }

  public getVerificationMnemonics(x: number) {
    if (this.query.mnemonic !== '') {
      const mnemonics = this.query.mnemonic.split('');
      const verificationmnemonics = [];
      for (let i = 0; i < x; i++) {
        const index: number = Math.floor(Math.random() * mnemonics.length);
        verificationmnemonics.push(mnemonics[index]);
        mnemonics.splice(index, 1);
      }
      return verificationmnemonics;
    } else {
      console.log('Error: there is no mnemonics registered.');
    }
  }


}

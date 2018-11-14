import { Component, OnInit } from '@angular/core';
import { WalletQuery } from '../../+state';
import { Observable } from 'rxjs';
import { WalletService } from '../../+state';


@Component({
  selector: 'app-mnemonic',
  templateUrl: './mnemonic.component.html',
  styleUrls: ['./mnemonic.component.css']
})
export class MnemonicComponent implements OnInit {

  public mnemonic$: Observable<string[]>;
  public address$: Observable<string>;
  public mnemonicsChosen: boolean;
  public editable: boolean;
  public walletCreated: boolean;

  constructor(
    private query: WalletQuery,
    private service: WalletService
  ) { }

  ngOnInit() {
    this.mnemonic$ = this.query.mnemonic$;
    this.address$ = this.query.address$;
    this.service.pushLocalKeystoreToStore();
    this.mnemonicsChosen = false;
    this.editable = true;
    this.walletCreated = false;
  }
  public generateRandomMnemonic() {
    return this.service.generateRandomMnemonic();
  }

  public updateMnemonic() {
    this.service.setMnemonic(this.generateRandomMnemonic());
    this.mnemonicsChosen = true;
  }

  public createMnemonicWallet() {
    this.walletCreated = true;
    return this.service.createMnemonicWallet(this.query.mnemonic);
  }

  public generateKeystore(password: string) {
    this.service.generateKeystore(password);
  }

}

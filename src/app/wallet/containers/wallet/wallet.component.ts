import { Component, OnInit } from '@angular/core';
import { WalletQuery } from '../../+state';
import { Observable } from 'rxjs';
import { WalletService } from '../../+state';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  public address$: Observable<string>;

  constructor(
    private query: WalletQuery,
    private service: WalletService
  ) { }

  ngOnInit() {
    this.address$ = this.query.address$;
  }

  public createMnemonicWallet() {
    return this.service.createMnemonicWallet(this.query.mnemonic);
  }

  public generateKeystore(pwd: string) {
    this.service.generateKeystore(pwd);
  }

}

import { Component, OnInit } from '@angular/core';
import { WalletQuery } from '../../+state';
import { Observable } from 'rxjs';
import { WalletService } from '../../+state';
import { ethers } from 'ethers';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  public mnemonic$: Observable<string[]>;
  public wallet$: Observable<ethers.Wallet>;
  public address$: Observable<string>;

  constructor(
    private query: WalletQuery,
    private service: WalletService
  ) { }

  ngOnInit() {
    this.mnemonic$ = this.query.mnemonic$;
    this.address$ = this.query.address$;
    this.wallet$ = this.query.wallet$;
  }

  public createMnemonicWallet() {
    return this.service.createMnemonicWallet(this.query.getSnapshot().mnemonic);
  }

  public updateWallet() {
    this.service.setWallet(this.createMnemonicWallet());
  }

  public updateAddress() {
    this.service.setWalletAddress(this.service.getAddress(this.query.getSnapshot().wallet));
  }

}

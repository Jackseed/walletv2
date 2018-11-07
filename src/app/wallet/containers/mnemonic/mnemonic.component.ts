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


  constructor(
    private query: WalletQuery,
    private service: WalletService
  ) { }

  ngOnInit() {
    this.mnemonic$ = this.query.mnemonic$;
  }
  public generateRandomMnemonic() {
    return this.service.generateRandomMnemonic();
  }

  public updateMnemonic() {
    this.service.setMnemonic(this.generateRandomMnemonic());
  }


}

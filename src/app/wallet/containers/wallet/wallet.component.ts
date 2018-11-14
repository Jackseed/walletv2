import { Component, OnInit } from '@angular/core';
import { WalletQuery, WalletService } from '../../+state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  public balance$: Observable<string>;
  public address$: Observable<string>;

  constructor(
    private query: WalletQuery,
    private service: WalletService
  ) { }

  ngOnInit() {
    this.balance$ = this.query.balance$;
    this.address$ = this.query.address$;
    if (this.query.address !== '') {
      this.service.setBalance();
    }
  }

  public updateBalance() {
    if (this.query.address !== '') {
      this.service.setBalance();
    }
  }

}

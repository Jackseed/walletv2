import { Component, OnInit } from '@angular/core';
import { WalletQuery } from '../../+state';
import { WalletService } from '../../+state';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {


  constructor(
    private query: WalletQuery,
    private service: WalletService
  ) { }

  ngOnInit() {}

}

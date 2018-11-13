import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../+state';
import { ethers } from 'ethers';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(
    private service: WalletService
  ) { }

  ngOnInit() {
  }

  public sendTransaction(to: string, amount: string, gaslimit: string,gasfee: string) {

   const tx: ethers.providers.TransactionRequest = {
      to: to,
      value: ethers.utils.parseEther(amount),
      gasLimit: gaslimit,
      gasPrice: ethers.utils.parseEther(gasfee)
    };
    this.service.signTransaction(tx);
  }
}

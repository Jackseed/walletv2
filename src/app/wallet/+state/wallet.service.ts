import { Injectable } from '@angular/core';
import { WalletStore } from './wallet.store';
import { ethers } from 'ethers';

@Injectable({ providedIn: 'root' })
export class WalletService {

  constructor(private store: WalletStore) {
  }

  setMnemonic(mnemonic: string) {
   this.store.update({ mnemonic });
  }

  generateRandomMnemonic() {
    return ethers.Wallet.createRandom().mnemonic;
  }

  createMnemonicWallet(mnemonic: string) {
    return ethers.Wallet.fromMnemonic(mnemonic);
  }

  setWallet(wallet: ethers.Wallet) {
    this.store.update({ wallet });
  }

  getAddress(wallet: ethers.Wallet) {
    return wallet.address;
  }

  setWalletAddress(address: string) {
    this.store.update({ address });
   }
}

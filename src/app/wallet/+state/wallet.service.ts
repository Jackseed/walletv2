import { Injectable } from '@angular/core';
import { WalletStore } from './wallet.store';
import { ethers } from 'ethers';

@Injectable({ providedIn: 'root' })
export class WalletService {
  private wallet: ethers.Wallet;

  constructor(private store: WalletStore) {
  }

  public setMnemonic(mnemonic: string) {
   this.store.update({ mnemonic });
  }

  public generateRandomMnemonic() {
    return ethers.Wallet.createRandom().mnemonic;
  }

  public createMnemonicWallet(mnemonic: string) {
    this.wallet = ethers.Wallet.fromMnemonic(mnemonic);
    this.store.update({ address: this.wallet.address });
    this.setMnemonic('');
  }

  public async generateKeystore(password: string) {
    const keystore = await this.wallet.encrypt(password);
    this.store.update({ keystore });
  }

}

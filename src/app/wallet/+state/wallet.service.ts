import { Injectable } from '@angular/core';
import { WalletStore } from './wallet.store';
import { ethers } from 'ethers';

@Injectable({ providedIn: 'root' })
export class WalletService {
  private wallet: ethers.Wallet;
  private localKeystore: string;
  private provider = new ethers.providers.InfuraProvider('kovan', 'bb4ddbd3692045d7a8a56af74736001e');

  constructor(private store: WalletStore) {
  }

  public setMnemonic(mnemonic: string) {
   this.store.update({ mnemonic });
  }

  public generateRandomMnemonic() {
    return ethers.Wallet.createRandom().mnemonic;
  }

  public setAddress() {
    this.store.update({ address : this.wallet.address });
  }

  public createMnemonicWallet(mnemonic: string) {
    this.wallet = ethers.Wallet.fromMnemonic(mnemonic);
    this.setAddress();
    this.setBalance();
    this.setMnemonic('');
  }

  public setKeystore(keystore: string) {
    this.store.update({ keystore});
  }

  public async generateKeystore(password: string) {
    const keystore = await this.wallet.encrypt(password);
    this.setKeystore(keystore);
    localStorage.setItem('keystore', keystore);
    console.log('keystore created and stored.');
  }

  public pushLocalKeystoreToStore() {
    this.localKeystore = localStorage.getItem('keystore');
    if (this.localKeystore) {
      this.setKeystore(this.localKeystore);
    }
  }

  public async decryptKeystore(keystore: string, password: string) {
    this.wallet = await ethers.Wallet.fromEncryptedJson(keystore, password);
    if (this.wallet) {
      this.setAddress();
      this.setBalance();
      this.setMnemonic(this.wallet.mnemonic);
    } else {
      console.log('error: not the good password');
    }
  }

  public setBalance() {
    this.provider.getBalance(this.wallet.address).then((balance) => {
      this.store.update({ balance : ethers.utils.formatEther(balance) });
      }
    );
  }
}

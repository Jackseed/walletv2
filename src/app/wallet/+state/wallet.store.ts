import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { ethers } from 'ethers';


export interface WalletState {
  mnemonic: string;
  wallet: ethers.Wallet;
  address: string;
}

export function createInitialState(): WalletState {
  return {
    mnemonic: 'salut c\'est cool',
    wallet: null,
    address: 'première adresse',
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wallet' })
export class WalletStore extends Store<WalletState> {

  constructor() {
    super(createInitialState());
  }

}


import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';



export interface WalletState {
  address: string;
  keystore: string;
  mnemonic: string;
  balance: string;
}

export function createInitialState(): WalletState {
  return {
    address: 'yet to be created...',
    keystore: '',
    mnemonic: '',
    balance: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wallet' })
export class WalletStore extends Store<WalletState> {

  constructor() {
    super(createInitialState());
  }

}


import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { WalletStore, WalletState } from './wallet.store';

@Injectable({ providedIn: 'root' })
export class WalletQuery extends Query<WalletState> {

  constructor(protected store: WalletStore) {
    super(store);
  }

  get address$ () {
    return this.select( (state) => state.address);
  }

  get address() {
    return this.getSnapshot().address;
  }

  get keystore$ () {
    return this.select( (state) => state.keystore);
  }

  get keystore() {
    return this.getSnapshot().keystore;
  }

  get mnemonic$ () {
    return this.select( (state) => state.mnemonic.split(''));
  }

  get mnemonic() {
    return this.getSnapshot().mnemonic;
  }
}

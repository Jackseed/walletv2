import { Injectable } from '@angular/core';
import { WalletStore } from './wallet.store';


@Injectable({ providedIn: 'root' })
export class WalletService {

  constructor(private store: WalletStore,
              ) {
  }

  setMnemonic(mnemonic: string) {
   this.store.update({ mnemonic });
  }

}

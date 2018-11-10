import { Component, OnInit } from '@angular/core';
import { WalletQuery } from '../../+state';
import { Observable } from 'rxjs';
import { WalletService } from '../../+state';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  public keystore$: Observable<string>;

  constructor(
    private query: WalletQuery,
    private service: WalletService
  ) { }

  ngOnInit() {
    this.keystore$ = this.query.keystore$;
    this.service.pushLocalKeystoreToStore();
  }

  public decryptKeystore(password: string) {
    this.service.decryptKeystore(this.query.keystore, password);
  }

}

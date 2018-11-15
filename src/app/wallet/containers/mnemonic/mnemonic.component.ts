import { Component, OnInit, Inject } from '@angular/core';
import { WalletQuery } from '../../+state';
import { Observable } from 'rxjs';
import { WalletService } from '../../+state';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  mnemonic$: Observable<string[]>;
}
@Component({
  selector: 'app-mnemonic',
  templateUrl: './mnemonic.component.html',
  styleUrls: ['./mnemonic.component.css']
})
export class MnemonicComponent implements OnInit {

  public mnemonic$: Observable<string[]>;
  public address$: Observable<string>;
  public mnemonicsChosen: boolean;
  public editable: boolean;
  public walletCreated: boolean;
  public formFinished: boolean;

  constructor(
    private query: WalletQuery,
    private service: WalletService,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.mnemonic$ = this.query.mnemonic$;
    this.address$ = this.query.address$;
    this.service.pushLocalKeystoreToStore();
    this.mnemonicsChosen = false;
    this.editable = true;
    this.walletCreated = false;
    this.formFinished = false;
  }
  public generateRandomMnemonic() {
    return this.service.generateRandomMnemonic();
  }

  public updateMnemonic() {
    this.service.setMnemonic(this.generateRandomMnemonic());
    this.mnemonicsChosen = true;
  }

  public createMnemonicWallet() {
    this.walletCreated = true;
    return this.service.createMnemonicWallet(this.query.mnemonic);
  }

  public generateKeystore(password: string) {
    this.service.generateKeystore(password);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MnemonicDialogComponent, {
      height: '400px',
      width: '600px',
      data: {mnemonic$: this.mnemonic$}
    });
  }

}


@Component({
  selector: 'app-mnmemonic-dialog',
  templateUrl: 'app-mnemonic-dialog.html',
})
export class MnemonicDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<MnemonicDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

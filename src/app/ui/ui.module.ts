import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MnemonicDialog } from '../wallet/containers/mnemonic/mnemonic.component';



@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    CommonModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatDialogModule],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatDialogModule],
})
export class UiModule { }

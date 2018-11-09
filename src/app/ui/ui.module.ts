import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, FormsModule, FlexLayoutModule, CommonModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, FormsModule, FlexLayoutModule],
})
export class UiModule { }

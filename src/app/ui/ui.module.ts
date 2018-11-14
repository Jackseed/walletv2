import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, FormsModule, FlexLayoutModule, CommonModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, FormsModule, FlexLayoutModule, MatCardModule],
})
export class UiModule { }

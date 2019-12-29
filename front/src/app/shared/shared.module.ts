import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { ClickOutsideModule } from 'ng-click-outside';

import { ToolsBarComponent } from './toolsBar/toolsBar.component';

@NgModule({
  declarations: [
    ToolsBarComponent,
  ],
  imports: [CommonModule, InlineSVGModule, FormsModule, ReactiveFormsModule, ClickOutsideModule],
  exports: [
    ToolsBarComponent,
  ],
  providers: []
})
export class SharedModule {}

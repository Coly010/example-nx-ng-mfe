import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { CardComponentModule } from '@nx-ng-mfe/shared-ui';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, CardComponentModule, FormsModule, RouterModule],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class LoginFeatureModule {}

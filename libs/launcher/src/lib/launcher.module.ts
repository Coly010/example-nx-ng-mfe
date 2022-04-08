import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponentModule } from '@nx-ng-mfe/shared-ui';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './header/header.component';
import { DockComponent } from './dock/dock.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ButtonComponentModule,
    RouterModule.forChild([{ path: '', component: ShellComponent }]),
  ],
  declarations: [ShellComponent, HeaderComponent, DockComponent],
  exports: [ShellComponent],
})
export class LauncherModule {}

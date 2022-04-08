import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponentModule } from '@nx-ng-mfe/shared-ui';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './header/header.component';
import { DockComponent } from './dock/dock.component';

@NgModule({
  imports: [CommonModule, ButtonComponentModule],
  declarations: [ShellComponent, HeaderComponent, DockComponent],
  exports: [ShellComponent],
})
export class LauncherModule {}

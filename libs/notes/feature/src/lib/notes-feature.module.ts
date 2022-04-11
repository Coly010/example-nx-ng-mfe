import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { NotesUiModule } from '@nx-ng-mfe/notes/ui';
import { CardComponentModule } from '@nx-ng-mfe/shared-ui';

@NgModule({
  imports: [CommonModule, NotesUiModule, CardComponentModule],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class NotesFeatureModule {}

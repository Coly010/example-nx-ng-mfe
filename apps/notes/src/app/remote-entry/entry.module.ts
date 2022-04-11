import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NotesFeatureModule } from '@nx-ng-mfe/notes/feature';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    NotesFeatureModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}

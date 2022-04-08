import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { TodoFeatureModule } from '@nx-ng-mfe/todo/feature';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    TodoFeatureModule,
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

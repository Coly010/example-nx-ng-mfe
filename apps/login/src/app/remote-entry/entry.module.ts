import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { LoginFeatureModule } from '@nx-ng-mfe/login/feature';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    LoginFeatureModule,
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

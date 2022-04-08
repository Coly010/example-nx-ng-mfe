import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponentModule } from '@nx-ng-mfe/shared-ui';

@Component({
  selector: 'nx-ng-mfe-default-page',
  templateUrl: './default-page.component.html',
})
export class DefaultPageComponent {}

@NgModule({
  imports: [
    CommonModule,
    CardComponentModule,
    RouterModule.forChild([{ path: '', component: DefaultPageComponent }]),
  ],
  declarations: [DefaultPageComponent],
  exports: [DefaultPageComponent],
})
export class DefaultPageComponentModule {}

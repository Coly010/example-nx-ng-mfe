import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-ng-mfe-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonComponentModule {}

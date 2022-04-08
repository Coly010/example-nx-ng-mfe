import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-ng-mfe-card',
  templateUrl: './card.component.html',
})
export class CardComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardComponentModule {}

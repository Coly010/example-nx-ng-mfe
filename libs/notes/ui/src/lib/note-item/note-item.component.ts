import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nx-ng-mfe-note-item',
  templateUrl: './note-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteItemComponent {
  @Input() note = '';
  @Input() created = 0;
}

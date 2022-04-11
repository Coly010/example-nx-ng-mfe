import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'nx-ng-mfe-notes-list',
  templateUrl: './notes-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesListComponent {
  @Input() notes: Map<number, string> | null = new Map<number, string>();
  @Output() deleteNote = new EventEmitter<{ id: number }>();

  delete(id: number) {
    this.deleteNote.emit({ id });
  }

  trackById(index: number, [id]: [number, string]) {
    return id;
  }
}

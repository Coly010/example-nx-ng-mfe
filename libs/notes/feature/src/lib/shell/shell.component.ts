import { Component } from '@angular/core';
import { NotesService } from '@nx-ng-mfe/notes/data-access';
import { map } from 'rxjs';

@Component({
  selector: 'nx-ng-mfe-notes-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  // Weird hack required to break the map's reference to allow triggering of change detection
  notes$ = this.notesService.notes$.pipe(map((v) => new Map(v.entries())));

  constructor(private notesService: NotesService) {}

  addNote(note: string) {
    note = note.trim();
    if (note !== '') {
      this.notesService.addNote(note);
    }
  }

  deleteNote({ id }: { id: number }) {
    this.notesService.removeNote(id);
  }
}

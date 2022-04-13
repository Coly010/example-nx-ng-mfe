import { Component } from '@angular/core';
import { NotesService } from '@nx-ng-mfe/notes/data-access';
import { AuthService } from '@nx-ng-mfe/shared/data-access/auth';
import { map } from 'rxjs';

@Component({
  selector: 'nx-ng-mfe-notes-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  // This is required to break the map's reference to allow triggering of change detection
  notes$ = this.notesService.notes$.pipe(map((v) => new Map(v.entries())));
  user$ = this.authService.user$;

  constructor(
    private notesService: NotesService,
    private authService: AuthService
  ) {}

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

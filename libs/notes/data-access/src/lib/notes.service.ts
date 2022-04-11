import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes = new Map<number, string>();

  notes$ = new BehaviorSubject(this.notes);

  addNote(note: string) {
    this.notes.set(Date.now(), note);
    this.notes$.next(this.notes);
  }

  removeNote(id: number) {
    this.notes.delete(id);
    this.notes$.next(this.notes);
  }
}

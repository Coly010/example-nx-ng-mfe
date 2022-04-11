import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteItemComponent } from './note-item/note-item.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { CardComponentModule } from '@nx-ng-mfe/shared-ui';

@NgModule({
  imports: [CommonModule, CardComponentModule],
  declarations: [NoteItemComponent, NotesListComponent],
  exports: [NoteItemComponent, NotesListComponent],
})
export class NotesUiModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LauncherModule } from '@nx-ng-mfe/launcher';
import { AuthGuard } from '@nx-ng-mfe/shared/data-access/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LauncherModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@nx-ng-mfe/launcher').then(
              (m) => m.DefaultPageComponentModule
            ),
        },
        {
          path: 'todo',
          loadChildren: () =>
            import('todo/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: 'notes',
          loadChildren: () =>
            import('notes/Module').then((m) => m.RemoteEntryModule),
          canActivate: [AuthGuard],
          canLoad: [AuthGuard],
        },
        {
          path: 'login',
          loadChildren: () =>
            import('login/Module').then((m) => m.RemoteEntryModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

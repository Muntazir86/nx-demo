import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'app-mfe1-entry',
  template: `<h1>Hello, Have a good day!</h1>`,
})
export class RemoteEntryComponent {}

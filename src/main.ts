import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <ng-container *ngIf="isAdmin">
  <ng-container *ngTemplateOutlet="adminTemplate"></ng-container>
    </ng-container>
<ng-container *ngIf="!adminTemplate">Hello to Non Admin !</ng-container>
<ng-template #adminTemplate><h1>Hello to Admin!</h1></ng-template>
  `,
})
export class App {
  isAdmin = false;
}

bootstrapApplication(App);

import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="card">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .card {
      padding: 16px;
      background: #fff;
      border-radius: 10px;
      border: 1px solid #ddd;
      margin-bottom: 12px;
    }
  `]
})
export class CardComponent {}

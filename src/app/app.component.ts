import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <input
      type='text'
      [value]= name
      (input)= handleChange($event.target.value)
    >
    <ng-template [ngIf]= 'name.length > 2'>
      <div >
        Searching for... {{ name }}
      </div>
    </ng-template>

    <div *ngIf= name.length>
      Searching for... {{ name }}
    </div>
  `
})
export class AppComponent {
  name: string = '';

  handleChange(value: string) {
    this.name = value;
  }
}

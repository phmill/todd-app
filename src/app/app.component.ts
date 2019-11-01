import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <h1 class='app'>
      {{ title }}
    </h1>
    <h1 [innerHtml]='title'></h1>
    <img [height]='50' [width]='50' [src]= 'logo'>
    <div>

      <button (click)=handleButton() >Change Name</button>
      <input
        type='text'
        [value]= 'name'
        (input)= handleInput($event)
        (blur)= handleBlur($event)
      >
      {{ name }}
      <input
        type='text'
        [ngModel]= 'name2'
        (ngModelChange)= handleChange($event)
      >
      {{ name2 }}
      <input
        type='text'
        [(ngModel)]= 'name2'
      >
      {{ name2 }}
    </div>
    <div>
      <button (click)=handleClick(username.value) >Get Username</button>
      <input
      type='text'
      #username
    >
    {{ name3 }}
    </div>
  `
})
export class AppComponent {
  title: string;
  logo: string = 'assets/mill-svgrepo-com.svg';
  name: string = 'en slip sur internet';
  name2: string = 'Zbygnew';
  name3: string = 'Juventus';
  constructor() {
    this.title = 'ta mere en slip';
  }
  handleButton() {
    this.name = 'Ta mere '.concat(this.name);
  }
  handleInput(event: any) {
    this.name = event.target.value;
    console.log(event);
  }
  handleBlur(event: any) {
    this.name = event.target.value;
  }
  handleChange(value: string) {
    this.name2 = value;
  }
  handleClick(value: string) {
    this.name3 = value;
  }
}

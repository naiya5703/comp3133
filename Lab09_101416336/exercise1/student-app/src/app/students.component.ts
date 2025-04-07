import { Component } from '@angular/core';

@Component({
  selector: 'students',
  template: `<h1>{{ getTitle() }}</h1>
            <p>Current Date: {{ getCurrentDate() }}</p>`
})
export class StudentsComponent {
  title: string = "My List of Students";

  getTitle(): string {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }
}

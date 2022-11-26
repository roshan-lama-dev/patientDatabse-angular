import { Component } from '@angular/core';

@Component({
  template: `
    <h5>The url you have entered is incorrect. Please check the url</h5>
    <button class="btn btn-primary" routerLink="/">Home Page</button>
  `,
})
export class BadURLComponent {}

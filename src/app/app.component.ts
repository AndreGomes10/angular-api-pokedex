import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Aula de Services</h1>
  <app-card></app-card>
  <router-outlet></router-outlet>`,  // passando o componente direto aqui
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-e-pipes';
}

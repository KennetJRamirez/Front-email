import { Component } from '@angular/core';
import { EmailTemplateComponent } from './email-template/email-template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmailTemplateComponent], // Agrega el componente aquí
  template: `<app-email-template></app-email-template>`, // Usa el componente en la plantilla
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'email-frontend';
}

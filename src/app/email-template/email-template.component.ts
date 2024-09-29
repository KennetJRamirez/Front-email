import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.css'],
})
export class EmailTemplateComponent {
  emails: string[] = [];

  constructor(private emailService: EmailService) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.emailService.extractEmails(file).subscribe({
        next: (emails) => {
          this.emails = emails; // Guarda los correos extraídos
        },
        error: (err) => {
          console.error('Error extracting emails:', err);
        },
      });
    }
  }
}

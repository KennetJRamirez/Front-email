import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl =
    'https://backend-emails-springboot-java.onrender.com/api/emails/extract';

  constructor(private http: HttpClient) {}

  extractEmails(file: File): Observable<string[]> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<string[]>(this.apiUrl, formData);
  }
}

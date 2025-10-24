// src/app/services/detect.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetectService {

  // Correct full endpoint URL
  private apiUrl = 'https://offertorial-ovally-manie.ngrok-free.dev/predict';

  constructor(private http: HttpClient) {}

  uploadImage(file: File, returnImage: boolean = true): Observable<Blob> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('return_image', String(returnImage));

    // Send POST request to /predict
    return this.http.post(this.apiUrl, formData, { responseType: 'blob' });
  }
}

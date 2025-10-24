import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DetectService } from '../services/detect.service';

@Component({
  selector: 'app-detect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.css']
})
export class DetectComponent {
  // -------- Image Upload Detection --------
  selectedFile: File | null = null;
  previewUrl: string | null = null;
  resultUrl: string | null = null;
  loading = false;

  // -------- Live Camera Detection --------
  videoUrl = '';
  cameraActive = false;
  detectionMessage = '';
  detectedImages: string[] = [];

  constructor(private detectService: DetectService, private http: HttpClient) {}

  // ==================== IMAGE UPLOAD ====================
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => this.previewUrl = reader.result as string;
      reader.readAsDataURL(this.selectedFile);
    }
  }

  uploadImage(): void {
    if (!this.selectedFile) {
      alert('Please select an image first!');
      return;
    }

    this.loading = true;
    this.detectService.uploadImage(this.selectedFile, true).subscribe({
      next: (blob) => {
        this.resultUrl = URL.createObjectURL(blob);
        this.loading = false;
      },
      error: (err) => {
        console.error('Upload failed:', err);
        alert('Something went wrong with detection');
        this.loading = false;
      }
    });
  }

  

  // ==================== LIVE DETECTION ====================
  startCamera(): void {
    this.http.post('http://localhost:5000/start_camera', {}).subscribe(() => {
      this.videoUrl = 'http://localhost:5000/video_feed';
      this.cameraActive = true;
      this.detectionMessage = 'Camera is running...';
      this.loadDetectedImages();
    });
  }

  stopCamera(): void {
    this.http.post('http://localhost:5000/stop_camera', {}).subscribe(() => {
      this.cameraActive = false;
      this.videoUrl = '';
      this.detectionMessage = 'Camera stopped.';
    });
  }

  loadDetectedImages(): void {
    this.http.get<{ images: string[] }>('http://localhost:5000/get_detected_images')
      .subscribe(data => {
        this.detectedImages = data.images;
      });
  }
}

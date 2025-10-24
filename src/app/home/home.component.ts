import { Component ,HostListener} from '@angular/core';
// import { NavComponent } from "../nav/nav.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";

import { DetectComponent } from "../detect/detect.component";

@Component({
  selector: 'app-home',
  imports: [DetectComponent, ContactUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  @HostListener('mousemove', ['$event'])
onMouseMove(event: MouseEvent) {
  const gunElement = document.querySelector('.gun') as HTMLElement;
  if (gunElement) {
    const rect = gunElement.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    gunElement.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  }
}

}

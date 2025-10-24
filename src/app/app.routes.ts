import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetectComponent } from './detect/detect.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detect', component: DetectComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

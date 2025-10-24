import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
// import { ContactUsComponent } from "./contact-us/contact-us.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weaponAi';
}

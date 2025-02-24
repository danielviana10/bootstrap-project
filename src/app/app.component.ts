import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FormComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bootstrap-project';
}

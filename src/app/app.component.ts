import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio'
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, MatSidenavModule, MatToolbarModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Case-control';
  opened = false;
}

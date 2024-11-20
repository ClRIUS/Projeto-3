import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  goHome(): void {
    this.router.navigate(['/home']);
  }

  goMenu(): void {
    this.router.navigate(['/menu']);
  }
}
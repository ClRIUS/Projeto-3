import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() textButton: string;
  @Input() buttonClass: string = '';
  @Input() routerLink: string | string[] = '';
}

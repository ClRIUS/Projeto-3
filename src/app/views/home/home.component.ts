import { Component } from '@angular/core';
import { ContainerImgComponent } from "../../components/container-img/container-img.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContainerImgComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

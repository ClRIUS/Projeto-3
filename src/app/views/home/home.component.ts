import { Component } from '@angular/core';
import { ContainerImgComponent } from "../../components/container-img/container-img.component";
import { HeaderComponent } from "../../components/header/header.component";
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContainerImgComponent, HeaderComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

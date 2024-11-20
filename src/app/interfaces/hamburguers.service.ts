import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HamburguersService {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  price: number;
  categoryId: number;
}

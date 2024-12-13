import { Component, input } from '@angular/core';

@Component({
  selector: 'app-photo-page',
  imports: [],
  templateUrl: './photo-page.component.html',
  styleUrl: './photo-page.component.scss'
})
export class PhotoPageComponent {
  id = input('');
}

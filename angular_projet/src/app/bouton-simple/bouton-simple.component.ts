import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-bouton-simple',
  standalone: false,
  templateUrl: './bouton-simple.component.html',
  styleUrl: './bouton-simple.component.css'
})
export class BoutonSimpleComponent {
  @Input()
  public texte: string = '';
}

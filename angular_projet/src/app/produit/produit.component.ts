import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-produit',
  standalone: false,
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  @Input()
  public nomProduit: string = '';
}

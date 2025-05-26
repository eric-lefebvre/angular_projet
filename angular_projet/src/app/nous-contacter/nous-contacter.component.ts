import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nous-contacter',
  standalone: false,
  templateUrl: './nous-contacter.component.html',
  styleUrl: './nous-contacter.component.css'
})
export class NousContacterComponent {
  envoyerFormulaire(form: NgForm): void {
    if (form.valid) {
      alert('📨 Votre message a bien été envoyé. Merci de nous avoir contactés !');
      form.reset(); 
    } else {
      alert('❗ Merci de remplir tous les champs du formulaire.');
    }
  }
}

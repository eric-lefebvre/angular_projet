import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommandation',
  standalone: false,
  templateUrl: './recommandation.component.html',
  styleUrl: './recommandation.component.css'
})
export class RecommandationComponent implements OnInit {

    recommendation: { type: string } | null = null;
    constructor(private router: Router) {}
  
    ngOnInit(): void {
      const answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
  
      this.recommendation = this.determineRecommendation(answers);
    }
  
determineRecommendation(answers: any): { type: string } {
  const { mainUse, budget, storage } = answers;

  if (mainUse === 'étudier' && budget === 'Moins de 500€') {
    return { type: 'student-worker' };
  } else if (mainUse === 'jouer' && budget === 'Plus de 1000€') {
    return { type: 'gamer' };
  } else if (mainUse === 'vidéo') {
    return { type: 'multimedia' };
  } else if (mainUse === 'étudier' && storage === 'Beaucoup (jeux, vidéos, gros fichiers)') {
    return { type: 'creator-dev' };
  }

  return { type: 'unknown' };
}


    restartQuiz(): void {
      this.router.navigate(['conception_simple']); 
    }

}

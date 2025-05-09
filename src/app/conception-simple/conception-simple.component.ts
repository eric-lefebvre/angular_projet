import { Component } from '@angular/core';

@Component({
  selector: 'app-conception-simple',
  templateUrl: './conception-simple.component.html',
  styleUrls: ['./conception-simple.component.css'],
  standalone:false,
})
export class ConceptionSimpleComponent {
  currentQuestion: number = 1;
  clickedAnswer: string | null = null;

  questions = [
    {
      header: "Que fais-tu principalement sur ton PC ?",
      answers: ["Travailler / Étudier", "Regarder des vidéos / Films", "Jouer à des jeux", "Navigation internet"]
    },
    {
      header: "Combien de temps passes-tu sur ton PC chaque jour ?",
      answers: ["Moins de 2 heures", "2 à 5 heures", "Plus de 5 heures"]
    },
    {
      header: "Ton PC doit-il être transportable ?",
      answers: ["Non, il reste chez moi", "Oui, il sera toujours avec moi", "Le transporter de temps en temps"]
    },
    {
      header: "Quelle taille d’écran te semble idéale pour ton PC ?",
      answers: ["Moins de 13 pouces (compact)", "Entre 13 et 15 pouces (standard)", "Plus de 15 pouces (grand écran)"]
    },
    {
      header: "De combien d’espace as-tu besoin ?",
      answers: ["Peu (documents, quelques photos)", "Moyen (pas mal de fichiers)", "Beaucoup (jeux, vidéos, gros fichiers)"]
    },
    {
      header: "Quel est ton budget pour ton nouveau PC ?",
      answers: ["Moins de 500€", "Entre 500€ et 1000€", "Plus de 1000€"]
    }
  ];

  answers: string[] = [];

  nextQuestion(): void {
    if (this.currentQuestion < this.questions.length) {
      this.currentQuestion++;
      this.clickedAnswer = null; // Réinitialise le bouton cliqué
      this.updateProgress();
    } else {
      this.recommendPC();
    }
  }

  nextQuestionManual(): void {
    if (this.currentQuestion < this.questions.length) {
      this.currentQuestion++;
      this.clickedAnswer = null;
      this.updateProgress();
    } else {
      this.recommendPC();
    }
  }
  
  previousQuestion(): void {
    if (this.currentQuestion > 1) {
      this.currentQuestion--;
      this.clickedAnswer = null;
      this.updateProgress();
    }
  }

  updateProgress(): void {
    const progress = (this.currentQuestion - 1) * (100 / this.questions.length);
    const progressBar = document.querySelector('.progress');
    if (progressBar) {
      (progressBar as HTMLElement).style.width = `${progress}%`;
    }
  }

  markAnswer(event: Event): void {
    const target = event.target as HTMLButtonElement;
    if (target) {
      target.classList.add('clicked');
    }
  }

  handleAnswer(questionIndex: number, answer: string): void {
    this.answers[questionIndex - 1] = answer;
    this.clickedAnswer = answer;

    if (questionIndex === this.questions.length) {
      this.recommendPC();
    } else {
      setTimeout(() => {
        this.nextQuestion();
      }, 300); // délai pour montrer le clic
    }
  }

  recommendPC(): void {
    alert("Voici le PC recommandé pour toi !");
    console.log("Réponses utilisateur :", this.answers);
  }
}
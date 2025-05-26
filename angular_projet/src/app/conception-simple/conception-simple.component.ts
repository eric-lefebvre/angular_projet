import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-conception-simple',
  standalone: false,
  templateUrl: './conception-simple.component.html',
  styleUrl: './conception-simple.component.css'
})
export class ConceptionSimpleComponent {

  recommendation: { type: string } | null = null;


  mainUse?: string;
  usageTime?: string;
  mobility?: string; 
  screenSize?: string;
  storage?: string;
  budget?: string;
  currentQuestion: number = 1;

  answers: {
    mainUse?: string;
    usageTime?: string;
    mobility?: string;
    screenSize?: string;
    storage?: string;
    budget?: string;
  } = {};
  constructor(private router: Router) {}


  ngAfterViewInit() {
    this.updateProgress();
  }


  selectAnswer(questionNumber: number, value: string): void {
    this.currentQuestion = 1;

    switch (questionNumber) {
      case 1:
        this.answers.mainUse = value;
        this.currentQuestion = 2;
        this.nextQuestion(2);
        localStorage.setItem('answers', JSON.stringify(this.answers.mainUse));
        break;
      case 2:
        this.answers.usageTime = value;
        this.currentQuestion = 3;
        this.nextQuestion(3);
        break;
      case 3:
        this.answers.mobility = value;
        this.currentQuestion = 4;
        this.nextQuestion(4);
        break;
      case 4:
        this.answers.screenSize = value;
        this.currentQuestion = 5;
        this.nextQuestion(5);
        break;
      case 5:
        this.answers.storage = value;
        this.currentQuestion = 6;
        this.nextQuestion(6);
        break;
      case 6:
        this.answers.budget = value;
        localStorage.setItem('quizAnswers', JSON.stringify(this.answers.budget));

        this.recommendPC();
        break;
    }
  }

  nextQuestion(questionNumber: number): void {
    document.getElementById(`q${this.currentQuestion}`)?.classList.remove('active');
    this.currentQuestion = questionNumber;
    document.getElementById(`q${this.currentQuestion}`)?.classList.add('active');
    this.updateProgress();
  }

  previousQuestion(): void {
    if (this.currentQuestion > 1) {
      document.getElementById(`q${this.currentQuestion}`)?.classList.remove('active');
      this.currentQuestion--;
      document.getElementById(`q${this.currentQuestion}`)?.classList.add('active');
      this.updateProgress();
    }
  }

  updateProgress(): void {
    const progress = (this.currentQuestion - 1) * 16.66;
    const progressBar = document.querySelector('.progress') as HTMLElement;
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  }

  recommendPC(): void {
    console.log('Answers collected:', this.answers);
    const answers = {
      mainUse: this.mainUse,
      budget: this.budget,
      storage: this.storage
    };
    
    this.router.navigate(['/recommandation'], {
      state: { answers: this.answers }
    });
}
}

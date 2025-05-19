import { Component } from '@angular/core';

@Component({
  selector: 'app-conception-detaillee',
  standalone: false,
  templateUrl: './conception-detaillee.component.html',
  styleUrl: './conception-detaillee.component.css'
})
export class ConceptionDetailleeComponent {
  currentQuestion: number = 1;

  ngAfterViewInit() {
    this.updateProgress();
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
    alert("Voici le PC recommandé pour toi !");
  }
}

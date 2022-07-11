import { Question } from "./question.js";

export class FillInBlank extends Question {
  constructor(type, content, answer, id) {
    super(id, type, content, answer);
  }
  render(i) {
    return `
      <div>
    <h3>Câu ${i}: ${this.content}</h3>
    <input id="answer-${this.id}" type="text" />
    </div>
    `;
  }

  checkExact() {
    const answer = document.getElementById(`answer-${this.id}`).value;

    return this.answers[0].content === answer;
  }
}

import { Question } from "./question.js";

export class MultipleChoice extends Question {
  constructor(type, content, answers, id) {
    super(id, type, content, answers);
  }
  render(i) {
    let answersHTML = "";

    for (let item of this.answers) {
      answersHTML += `
        <div>
      <input type="radio" value="${item.id}" name="answer-${this.id}" />
      <label for="">${item.content}</label>
        </div>
    `;
    }
    return `
    <div>
    <h3>Câu ${i}: ${this.content}?</h3>
    ${answersHTML}
  </div>
    `;
  }

  checkExact() {
    // biết input checked => lấy đc đáp án user đang chọn
    const inputs = document.querySelectorAll(`input[name=answer-${this.id}]`);
    let answerId;

    inputs.forEach((item) => {
      if (item.checked) answerId = item.value;
    });

    if (!answerId) return false;

    // check answer.exact
    const foundAnswer = this.answers.find((item) => {
      return item.id === answerId;
    });

    return foundAnswer.exact;
  }
}

export var a = 5;
export var b = 6;

export function test() {
  console.log(123123);
}

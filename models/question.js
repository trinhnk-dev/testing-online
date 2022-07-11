export class Question {
  constructor(id, questionType, content, answers) {
    this.id = id;
    this.questionType = questionType;
    this.content = content;
    this.answers = answers;
  }
  checkExact() {}
  render() {}
}

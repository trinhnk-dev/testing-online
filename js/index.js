//module
import { MultipleChoice, a, b, test } from "../models/multipleChoice.js";
import { FillInBlank } from "../models/fillInBlank.js";

let questionList = [];

//ES7: async await

const fetchQuestion = async () => {
  try {
    const res = await axios({
      url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
      method: "GET",
    });
    questionList = mapQuestions(res.data);

    renderQuestions(questionList);
  } catch (error) {
    console.log(error);
  }

  // .then((res) => {
  //   questionList = mapQuestions(res.data);

  //   renderQuestions(questionList);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
};

const renderQuestions = (data) => {
  let result = "";
  for (let i in data) {
    result += data[i].render(+i + 1);
  }
  document.getElementById("questionList").innerHTML = result;
};

const submit = () => {
  let result = 0;
  questionList.forEach((item) => {
    if (item.checkExact()) {
      result++;
    }
  });
  alert(`Ket qua: ${result}/${questionList.length}`);
};

// const results = [];
// let constructorClass;

// for (let item of data) {
//   constructorClass = item.questionType === 1 ? MultipleChoice : FillInBlank;
//   const { id, questionType, content, answer } = item;

//   const mappedQuestion = new constructorClass(
//     questionType,
//     content,
//     answer,
//     id
//   );
//   results.push(mappedQuestion);
// }
// return results;
const mapQuestions = (data) => {
  const results = data.map((item) => {
    let constructorClass =
      item.questionType === 1 ? MultipleChoice : FillInBlank;

    const { id, questionType, content, answers } = item;
    return new constructorClass(questionType, content, answers, id);
  });
  return results;
};

document.getElementById("btnStart").addEventListener("click", fetchQuestion);
document.getElementById("btnSubmit").addEventListener("click", submit);

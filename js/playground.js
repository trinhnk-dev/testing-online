// let và const
// có hoisting
// function scope
// cho phép khai báo lại
var a = 5;

// ko hỗ trợ hoisting
//const khai báo hằng, ko đc chỉnh sửa giá trị
// block scope {}
// ko đc khai báo lại
let b = 6;
const c = 7;

b = 10;

{
  var d = 6;
  let e = 5;

  console.log(e);
}

console.log(d);

// 5 số 5 tại vì setTimeout chờ 1s thì vòng for chạy xong và mỗi lần xong là 1 số 5
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// từ 0 - 4 vì trong phạm vi block scope thì mỗi số chỉ đc in ra 1 lần và ko lặp lại
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

//declaration function
// function sum(){
//   return 2 + 4;
// }

//expression function, ko có hoisting

const sum = function () {
  return 2 + 4;
};
console.log(sum());

// arrow function
const sum1 = () => 2 + 3;
console.log(sum1());

const obj = {
  name: "trinh",
  age: 12,

  showInfo: function () {
    console.log(this);
    const test2 = () => {
      console.log(this);
    };
    test2();
  },
};
obj.showInfo();

//dynamic scope: nơi gọi function quyết định this là cái gì

//spread operators
const obj1 = { name: "trinh" };
// const obj2 = Object.assign();
const obj2 = { ...obj1 };

obj1.name = "hieu";
console.log(obj1, obj2);

const obj3 = { age: 20 };

const obj4 = { email: "trinhrob123@gmail.com" };

const obj5 = { ...obj1, ...obj3, ...obj4, phoneNumber: "0325262564" };

console.log(obj5);

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [0, ...arr1, 6];

console.log(arr2);

//rest parameters

const sum5 = (...nums) => {
  let total = 0;
  for (i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  console.log(total);
};

sum5(2, 4, 5, 3, 5, 4, 5, 3);
sum5(2, 3);

//default parameters
const minus = (a = 2, b = 3) => {
  return a - b;
};
console.log(minus());
console.log(minus((a = 8), (b = 6)));

//destructuring

const student = {
  name1: "trinh",
  age: 20,
};
const student2 = {
  name1: "tai",
  age: 10,
};

const { name1, age } = student;
const { name1: name2, age: age2 } = student2;

console.log(name1, age);
console.log(name2, age2);

//literal object
const student3 = {
  name: "hieu",
  showName() {
    console.log(this.name);
  },
};

//for in
const names = ["trinh", "tai", "dung"];

// for (let i = 0 ; i < names.length ; i++){}

for (let i in names) {
  console.log(names[i]);
}

for (let k of names) {
  console.log(k);
}

let student4 = {
  name: "trinh",
  age: 20,
  email: "trinh@gmail.com",
};

for (let key in student4) {
  console.log(key + ":", student4[key]);
}

var students = [
  { name: "trinh", age: "20" },
  { name: "hieu", age: "12" },
];
students.map((item) => {
  return item.name;
});

// => trinh, hieu

//filter
const nums = [5, 5, 4, 6, 1, 5, 2, 5, 6, 2, 5, 6];
const nums2 = nums.filter((item) => {
  return item > 3;
});

console.log(nums2);

//high order function: map, filter, find, findIndex, forEach,...

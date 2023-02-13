type 함수타입 = (value: string) => number; //매개변수 string 리턴값 number

//함수 type alias쓰려면 함수표현식 사용해야한다

let 함수2: 함수타입 = function (value) {
  return 1;
};

//📌문제 1

type member = {
  name: string;
  age: number;
  plusOne: (a: number) => number;
  changeName: (a: number) => void;
};

let 회원정보: member = {
  name: 'kim',
  age: 30,
  plusOne(a: number): number {
    return a + 1;
  },
  changeName: (): void => {
    console.log('안녕');
  },
};

회원정보.plusOne(1);
회원정보.changeName(1);

//📌문제 2

type zero = (str: string) => string;

const cutZero: zero = str => {
  return str[0] === '0' ? str.slice(1, str.length) : str;
};

console.log(cutZero('dff'));

type dash = (value: string) => number;

const removeDash: dash = str => {
  return Number(str.replace(/[-]/g, ''));
};

console.log(removeDash('345-44'));

//📌문제 3

function 만들함수(value: string, callback: zero, callback2: dash) {
  console.log(callback2(callback(value)));
}
만들함수('010-1111-2222', cutZero, removeDash);

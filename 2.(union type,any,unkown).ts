let 회원: number | string = 123; //유니온타입
회원; //number
회원 = '회원 ㅎㅎ';
회원; //string
//🔥유니온 타입일때 가변적으로 타입이 변한다
//변수에 정의된 Union 타입은 할당과 동시에 OR 역할이 사라집니다.
//array, object에 정의된 Union 타입은 OR 연산자가 유지됩니다.

let 회원들2: (number | string)[] = [1, '2', 3];
let 오브젝트: { a: string | number } = { a: '123' };

let 애니타입: any; //🔥모든 자료형 허용해줌 (타입스크립트를 쓰는 의미가 없어짐) 타입실드 해제 문법입
애니타입 = 123;
애니타입 = '123';
애니타입 = true;
애니타입 = [];
애니타입 = {};

let 언노운타입: unknown;
언노운타입 = 123;
언노운타입 = {};

//❌에러발생 //let 변수1: string = 언노운타입;
//❌에러발생 // 언노운타입 - 1 //unknown 타입은 number,any,bigInt형식이 아니기 때문에 에러가 발생

/**
 * ✅특징
최신 타입 모든 자료형 허용해줌 any랑 같은기능 any보다 안전함
아래 변수1 에 객체를 할당한 언노운타입 변수를 변수1(string type)에 할당하면 에러가 발생함 하지만 any타입은 에러가 발생하지 않음
엄격함 간단한 수학연산도 타입이 맞아야함
 */

//✅사용법
/**
 * 아직 어떤 타입이 들어올지 모를 경우, 다양한 타입을 집어넣어야할 경우 이걸 사용해보시길 바랍니다. 

중요한 특징은

1. unknown 타입엔 모든 자료 다 집어넣을 수 있음

2. 자료집어넣어도 타입은 그대로 unknown입니다. 
 */

let 나이2: string | number; //string또는number 라는 새로운 타입임
//에러발생 //나이2 + 1; 자바스크립트에서는 '1'과 1인 숫자인 string과 number둘다 +1이 가능하기 때문에 에러가 발생
/**
 * ❌에러발생
let 이름: unknown;
let 변수1: string = 이름;
let 변수2: boolean = 이름;
let 변수3: number = 이름;

let 이름: unknown;
이름[0];
이름 - 1;
이름.data;
 */

//✅unknown타입 변수 조작하려면 narrowing 또는 assertion 스킬을 사용

//📌(숙제1) 다음 변수 4개에 타입을 지정해봅시다.
let user: string = 'kim';
let age1: undefined | number = undefined;
let married: boolean = false;
let 철수: (number | string | undefined | boolean)[] = [user, age1, married];

//📌(숙제2) 학교라는 변수에 타입지정해보십시오.
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];

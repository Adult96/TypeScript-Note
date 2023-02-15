//null과 undefined타입 확인 하는 경우가 제일 많음
//1. &&연산자로 null undefined 타입 체크하기

function Narrowing(params: string | undefined) {
  if (params && typeof params === 'string') {
  }
}
//2. 서로다른 속성을 가졌을때 (속성명) in (오브젝트 자료) 키워드로 object Narrowing가능

type Fish = { siwm: string };
type Bird = { fly: string };

function Narrowing2(params: Fish | Bird) {
  if ('siwm' in params) {
    return params.siwm;
  }
  return params.fly;
}

Narrowing2({ siwm: 'f' });

//3. instanceof 연산자로 object narrowing 가능

// (오브젝트) instanceof (부모 class(오브젝트))

let 날짜 = new Date();
if (날짜 instanceof Date) {
}

//4.비슷한 객체 타입일경우 비교하는 방법
//  literal type을 만들어서 비교하자
//논리적으로 타입을 특정지을 수 있으면 Narrowing으로 인정해줌

type Car1 = { wheel: '4개'; color: string };
type bike1 = { wheel: '2개'; color: string };

function carBike(params: Car1 | bike1) {
  if (params.wheel === '4개') {
    console.log('params는 car타입 이다');
  }
}

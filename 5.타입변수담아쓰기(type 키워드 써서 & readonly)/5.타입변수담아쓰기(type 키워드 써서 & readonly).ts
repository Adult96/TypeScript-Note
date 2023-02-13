type AnimalType = string | number | undefined; //타입정의가 길어질때 type alias(별칭)문법을 사용함

let 동물: AnimalType = 'kim';
동물 = 123;

type ChickenType = { 교촌: string; bbq: string; 가격: number }; //type키워드 사용해서 변수에 담아 할당 가능

//일반 변수와 차별화를 두기위해 pascal case를 사용
let 치킨: ChickenType = {
  교촌: '허니',
  bbq: '황금올리브',
  가격: 23000,
};

//TypeScript를 사용하면 object자료 수정하면 에러발생 하지만 js파일에서는 실행중
//TypeScript 에러는 에디터&터미널에서만 존재함
type Grilfriend = {
  readonly name: string;
};

const 여친: Grilfriend = {
  name: '엠버',
};

// 여친.name = '수지'; 읽기 전용 에러 발생

//타입 합치기
type Name = string;
type Age = number;
type Person = Name | Age;
// type Person = Name | Age; 같은 이름의 type변수 재정의 불가능

type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY; // 연산자로 extend한다 { x: number , y: number };

let position: NewType = { x: 10, y: 12 };

//📌(숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
type TestA = { key: string };
type TestB = { key: string };
type TestAB = TestA & TestB; //같은 키를 가진 객체를 합치면 하나로 합쳐짐
const 숙제_5_1: TestAB = { key: 'ㅅ' }; //{ key: 'ㅅ', key: 'ㅅ' }; 에러발생
console.log(숙제_5_1);

/**
 * 📌(숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 

1. 이 타입은 object 자료형이어야합니다.

2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 

3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.

4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  

type alias로 만들어보셈 
 */

type HomeWork_5_1 = {
  color?: string;
  size: number;
  readonly position: string[];
};

const homeWork_5_1_1: HomeWork_5_1 = {
  size: 123,
  position: ['100', '200'],
};

/**
 * 📌(숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 

1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }

2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.

3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
 */

type HomeWork_5_2 = { name: string; phone: number; email: string };

/**
 * 📌(숙제4). 다음을 만족하는 type alias를 만들어보십시오.

1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.

2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 

3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
 */

type HomeWork_5_3 = HomeWork_5_2 & { adult: boolean };
const HomeWork_5_3_1: HomeWork_5_3 = {
  name: 'ㅁㅇㄴㄹ',
  phone: 123,
  email: 'ㄹㅇㄴ',
  adult: true,
};
console.log(HomeWork_5_3_1);

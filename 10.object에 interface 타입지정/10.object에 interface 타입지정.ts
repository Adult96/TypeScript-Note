/**
 * 🔥사용법
 * 1. 대문자로 작명하고
 * 2. { } 안에 타입을 명시
 * 3.한 줄 끝나면 콤마대신 세미콜론도 가능
 */

/**
 * 🔥type 과 interface의 차이점
 *
 * 📌interface
 * 중복 선언 가능✅ (각자의 속성이 합쳐짐) 10~16번 라인 예시
 * 클래스처럼 extends 사용가능 25번예시
 * 🔥extends사용할때 중복 속성이 발생하면 에러 발생
 *
 * 📌type alias
 * 중복 선언 불가능❌ 엄격하기 때문에 에러 메세지 발생
 * ✅ &를 사용해서 extends기능 처럼 사용가능
 * ✅ &를 사용할때 중복속성에 타입도 같으면 합쳐짐
 * ✅ &를 사용할때 중복속성 발생하면 미리 에러가 나지 않고 type을 가져다 썻을때 (never)에러가 발생
 *
 * 타입스크립트로 작성된 외부 라이브러리보면 interface를 많이씀
 */

type Animal = { name: string };
type Cat = { age: number } & Animal; //& 기호는 (intersection type)

interface I네모 {
  color: string;
}
interface I네모 {
  score: string;
}
//중복 선언 하면 {color: string, score: string}두개의 속성을 가짐

interface T네모 extends I네모 {
  //클래스와 동일하게 extends하면 상속가능
  width: number;
}

let 네모: I네모 = { color: 'red', score: '1' };
let t네모: T네모 = { width: 100, color: 'red', score: '1' };

//interface 중복선언 가능 type불가능
// extends 중복 속성 불가능
// & 중복선언후 타입 사용할때 에러남

//(숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
interface I상품 {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: I상품 = {
  brand: 'Samsung',
  serialNumber: 1360,
  model: ['TV', 'phone'],
};

//(숙제2) array 안에 object 여러개가 필요합니다.
interface I장바구니 {
  product: string;
  price: number;
}

interface I카드 extends I장바구니 {
  card: boolean;
}

let 장바구니: (I카드 | I장바구니)[] = [
  { product: '청소기', price: 7000 },
  { product: '삼다수', price: 800 },
  { product: '삼다수', price: 800 },
  { product: '청소기', price: 7000, card: false },
];

/**
 * (숙제4) object 안에 함수를 2개 넣고 싶은데요 

1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 

2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 

이 object 자료를 어떻게 만들면 될까요? 

interface를 이용해서 object에 타입지정도 해보십시오. 
 */

type Tfunction = (a: number, b: number) => number;

interface Ifucntion {
  plus: Tfunction;
  minus: Tfunction;
}

const object함수숙제4: Ifucntion = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a + b;
  },
};

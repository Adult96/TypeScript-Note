//더 엄격한 타입 지정 가능 설정한 값만 들어올수있음
//literal types라고 한다
let 더엄격한타입문자: 'string'; //'string'만 들어올수있음
let 더엄격한타입숫자: 123; //123만 들어올수있음
let 더엄격한타입불리언: true; //true만 들어올수있음

더엄격한타입숫자 = 123;
// 더엄격한타입숫자 = 12; 에러 발생

let 접니다: '근육' | '남자';
접니다 = '근육';

//🔥사용하는 이유
//변수에 뭐가 들어올지 더 엄격하게 관리 가능
//자동완성 기능 힌트

function 더엄격한함수(params: '근육'): 0 | 1 {
  return 0;
}
더엄격한함수('근육');
// 더엄격한함수('소근육'); 에러 발생

type 가위바위보 = '가위' | '바위' | '보';
function 가위바위보함수(...params: 가위바위보[]): 가위바위보[] {
  return [...params];
}
console.log(가위바위보함수('가위', '바위', '보'));

//🔥Literal type은 const변수 업글 버전

const 자료 = {
  name: 'kim',
};

const 자료2 = {
  name: 'kim',
} as const;
//as const 키워드 사용 효과
//1.object value값을 타입으로 지정해줌
//2. object속성들에 모두 readonly 붙여줌

function 더엄격한함수2(params: 'kim') {}
// 더엄격한함수2(자료.name); //에러 발생 이유: 매개변수로 지정한 타입은 'kim'이라는 타입인데 자료.name은 string 타입이기 때문에 에러 발생
더엄격한함수2('kim');
더엄격한함수2(자료.name as 'kim'); //as 로 타입을 임시로 바꿈
더엄격한함수2(자료2.name);

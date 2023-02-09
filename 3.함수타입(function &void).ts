function 함수(input: number): number {
  //첫번째 타입은 매개변수 두번째 타입은 함수 return되는 값
  return input * 2;
}
함수(1);
// 함수('ㅇ')  에러

function 보이드(input: number): void {
  //함수를 return시키고 싶지 않는 type으로 지정하려면 void사용
  //실수로 뭔가를 return 하는걸 막을 수 있음
  input * 2;
}
//🔥자바스크립트와 다른점
//타입지정된 파라미터는 인자값을 필수로 넣어줘야함
보이드(1); //인자값 필수✅

function 보이드옵션(input?: number): void {
  //파라메터에 타입 지정하면 무조건 인자로 받아야 하기때문에 필요할시 옵션 설정함
  // ?는 타입 | undifined 이것과 같은 동작임
  input * 2;
}
보이드옵션();

//📌 이 함수는 왜이럴까요?
function 함수1(params: number | string) {
  // console.log(params + 3);  매개변수가 number도 숫잘를 더할수 있고 숫자의 string도 더할수있기 때문이다

  //위의 로그에러를 발생하지 않으려면 ✅ narrowing사용

  if (typeof params === 'number') {
    console.log(params + 3);
  } else {
    console.log(params + '3');
  }
}

//📌(숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
//아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
//파라미터와 return 타입지정도 잘 해봅시다.

function 숙제1(name?: string): void {
  console.log(name ? `안녕하세요 ${name}` : '이름이 없습니다.');
}

// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.

function 숙제2(params: string | number): number {
  return params.toString.length;
}

/**
 * (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.

1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 

2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 

3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

(예시)

결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.

결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.
 */

function 숙제3(monthMoney: number, home: boolean, rank: string): string | void {
  let point = 0;

  point += monthMoney;
  point += home ? 500 : 0;
  point += rank === '상' ? 100 : 0;
  if (point >= 600) {
    return '결혼가능';
  }
}

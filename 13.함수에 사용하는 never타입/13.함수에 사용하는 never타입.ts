/**
 * 1. return 값이 없어야함
 * 2. endpoint가 없어야함(실행이 끝나지 않는 함수)
 * 실제 코딩에서 쓸일이 없음 void로 대체 가능하기 때문
 * never타입은 코드 이상하게 짜면 나옴
 * 
 * 함수 선언문이 아무것도 return 하지 않고 끝나지도 않을 경우 void 타입이 자동으로 return 타입으로 할당되며

함수 표현식이 아무것도 return 하지 않고 끝나지도 않을 경우 never 타입이 자동으로 return 타입으로 할당됩니다.

또는 tsconfig.json에서 strict 옵션을 켜둘 경우 

함부로 any 타입을 지정해주지 않는 경우가 있습니다. 

그럴 때 array 같은거 대충 타입지정 안하고 만들면

 

let arr = [];
원래는 any[] 이런 타입이 되는데 any를 가질 수 없어서 

never[] 이런 타입이 발견되기도 합니다. 

아무튼 쓸 일이 별로 없기 때문에 이럴 때도 등장한다고 알아두기만 하면 됩니다.


 */

// function never타입(): never {
//1. while(true){}
//2. throw new Error(); //코드 실행 중단(함수 실행이 끝나는건 아님)
//3. return undefined 모든 함수에서 숨겨져있다
// }

//이상하게 짠 코드
function 이상한코드(params: string) {
  if (typeof params === 'string') {
    console.log(params);
  } else {
    console.log('여기 들어가는 값은 never', params);
  }
}

// never 타입 함수
let neverArrowfunction = () => {
  throw new Error();
};

function 네로윙(x) {
    // return x + 1; //에러 발생 유니온 타입으로 정의 해서 에러남
    //네로윙(Narrowing 사옹) 타임스크립트는 엄격하기때문에 타입이 애매할땐 네로윙을 사용해야한다
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
네로윙(123);
function 네로윙2(x) {
    // return x + 1; //에러 발생 유니온 타입으로 정의 해서 에러남
    let arr = [];
    // arr[0] = x; //에러발생
    if (typeof x === 'number') {
        //Narrowing으로 판정해주는 문법들을 사용하기만 하면 타입에러 발생 안함 typeof,(속성명)in(오브젝트),(인스턴스)instanceof(부모)
        arr[0] = x;
    }
}
네로윙2(123);
/**
 * assertion 문법 용도
 * ✅1.Narrowing 할때 사용
 * ✅2.유니온 문법을 확정 지을때 사용
 * ❌3.확정된 타입을 덮어씌우면 안됨 let test : string = 'test'/ test as number
 * ✅4.무슨타입이 들어올지 100% 확실 할때 사용 (assertion을 사용하면 인자로 문자 타입을 넣어도 에러가 발생하지 않음)
 * 과거 <number>test 와같이 사용했지만 HTML타입과 비슷해서 요즘은 as로 사용
 *
 * 타입실드 임시 해제용입니다. 실제 코드 실행결과는 as 있을 때나 없을 때나 거의 동일합니다.
 * 1. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용하거나
 * 2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때
 */
function assertion(x) {
    return x + 1;
}
assertion('123'); //'1231'
function assertion2(x) {
    // return x + 1; //에러 발생 유니온 타입으로 정의 해서 에러남
    let arr = [];
    arr[0] = x; //어썰션(assertion) 사용 왼쪽에있는 것을 오른쪽 타입으로 덮음
}
네로윙2(123);
/**
 * (숙제1) 숫자여러개를 array 자료에 저장해놨는데
가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.

이걸 클리닝해주는 함수가 필요합니다.

클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면

[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.

모르는 부분은 구글검색해도 봐드림
 */
function 숙제_4_1(arr) {
    return arr.map(v => (typeof v === 'string' ? Number(v) : v));
}
숙제_4_1(['1', 2, '3']);
//📌(숙제2) 다음과 같은 함수를 만들어보십시오.
// 입력
let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };
let 성인쌤 = { weightTraining: ['light weight'] };
/**
 * 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.

과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고

과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.

철수쌤같은 선생님이 object 자료를 집어넣으면

그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.

그리고 타입지정도 엄격하게 해보도록 합시다.

(동작예시)
만들함수({ subject: 'math' }); //이 경우 'math'를 return
만들함수({ subject: ['science', 'art', 'korean'] }); //이 경우 'korean'을 return
만들함수({ hello: 'hi' }); //이 경우 타입에러 나면 됩니다
 */
function 숙제_4_2(obj) {
    const subject = obj.subject;
    return typeof subject === 'string' ? subject : subject[subject.length - 1];
}
console.log(숙제_4_2(영희쌤));

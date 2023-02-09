//js 일때 tsc -w 명령어 실행
var 이름 = 'kim'; //🔥변수 이름 옆에 type 지정
이름 = '123';
var 나이 = 123;
나이 = 234;
var 결혼여부 = true;
결혼여부 = false;
결혼여부 = null;
결혼여부 = undefined;
var 돈 = null; //굳이 사용하진 않는다.
var 귀신 = undefined; //굳이 사용하진 않는다.
var 회원들 = ['kim', 'park'];
var 유니온타입 = ['kim', 1, 1, 'park']; //🔥다른 타입의 값을 넣기 위해서 유니온 타입을 사용한다.
var 나이들 = [1, 2, 3];
var 브랜드 = { 샤넬: '샤넬', 구찌: 1 };
var 호랑이 = 'tiger'; //🔥const로 지정하면 상수 이기때문에 tpye이 안나오고 let으로 지정하면 할당 가능하기 때문에 type이 표시됨 그리고 타입이 자동으로 지정됨
var 숫자 = 123;
var 할당; //🔥나중에 'kim'을 할당해도 타입이 자동으로 string으로 변환한다
할당 = 'kim'; //그래서 간단한 변수들은 타입을 생략하도록 하자
//==============================================================================
//Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
var adult = '박성인';
var age = 28;
var from = '인천';
//Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
var 뉴진스 = {
    노래: '하입보이',
    이름: ['민지', '혜린', '하니', '다니엘', '혜인'],
};
//Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};

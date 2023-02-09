function 함수(input) {
    //첫번째 타입은 매개변수 두번째 타입은 함수 return되는 값
    return input * 2;
}
함수(1);
// 함수('ㅇ')  에러
function 보이드(input) {
    //함수를 return시키고 싶지 않는 type으로 지정하려면 void사용
    //실수로 뭔가를 return 하는걸 막을 수 있음
    input * 2;
}
//🔥자바스크립트와 다른점
//타입지정된 파라미터는 인자값을 필수로 넣어줘야함
보이드(1); //인자값 필수✅

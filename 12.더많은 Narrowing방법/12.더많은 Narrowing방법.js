//null과 undefined타입 확인 하는 경우가 제일 많음
//1. &&연산자로 null undefined 타입 체크하기
function Narrowing(params) {
    if (params && typeof params === 'string') {
    }
}
function Narrowing2(params) {
    if ('siwm' in params) {
        return params.siwm;
    }
    return params.fly;
}
Narrowing2({ siwm: 'f' });
//3. instanceof 연산자로 object narrowing 가능
// (오브젝트) instanceof (부모 class(오브젝트))
var 날짜 = new Date();
if (날짜 instanceof Date) {
}
function carBike(params) {
    if (params.wheel === '4개') {
        console.log('params는 car타입 이다');
    }
}

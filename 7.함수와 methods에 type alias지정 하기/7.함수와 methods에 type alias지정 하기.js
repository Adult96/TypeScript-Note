//함수 type alias쓰려면 함수표현식 사용해야한다
let 함수2 = function (value) {
    return 1;
};
let 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne(a) {
        return a + 1;
    },
    changeName: () => {
        console.log('안녕');
    },
};
회원정보.plusOne(1);
회원정보.changeName(1);
const cutZero = str => {
    return str[0] === '0' ? str.slice(1, str.length) : str;
};
console.log(cutZero('dff'));
const removeDash = str => {
    return Number(str.replace(/[-]/g, ''));
};
console.log(removeDash('345-44'));
//📌문제 3
function 만들함수(value, callback, callback2) {
    console.log(callback2(callback(value)));
}
만들함수('010-1111-2222', cutZero, removeDash);

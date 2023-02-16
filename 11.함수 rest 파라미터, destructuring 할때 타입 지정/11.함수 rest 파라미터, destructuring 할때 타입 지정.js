//rest 파라미터 (...스프레드) destructuring (구조분해 할당)
function rest함수(...a) {
    console.log(a);
}
rest함수(1, 2, 3, 4, 5, 6, 7, true);
let student = { student: true, age2: 20 };
function destructuring({ student, age2 }) {
    console.log(student, age2);
}
destructuring(student);
/**
 * (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.

최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.

(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.

(조건2) Math.max() 사용금지 반복문이나 쓰셈
 */
function 숙제11_1(...value) {
    let max = 0;
    value.forEach(num => {
        if (max < num) {
            max = num;
        }
    });
    return max;
}
console.log(숙제11_1(1, 2, 5, 4, 3));
function 함수11_2({ user, comment, admin }) {
    console.log(user, comment, admin);
}
함수11_2({ user: 'kim', comment: [3, 5, 4], admin: false });
//(숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
//구조분해 할당으로 배열을 가져오는데 해당하는 인자를 각각 가져온다
function 함수11_3([a, b, c]) {
    console.log(a, b, c);
}
함수11_3([40, 'wine', false]);

//Html을 조작할때 narrowing을 해줘야한다.
//============== 1번 =============
let title제목 = document.querySelector('#title');
if (title제목 !== null) {
    title제목.innerHTML = '반가워요';
}
//============== 2번 =============
let title제목2 = document.querySelector('#title'); //가장 많이 사용한다
if (title제목2 instanceof Element) {
    //object(객체) instanceof 클래스명 맞으면 true반환
    title제목2.innerHTML = '반가워요';
}
//============== 3번 =============
let title제목3 = document.querySelector('#title'); //사기 친다
title제목3.innerHTML = '반가워요';
//============== 4번 =============
let title제목4 = document.querySelector('#title');
//1. 제목에 innerHTML이 있으면 출력해주고
//2. 없으면 undefined 뱉는다
if (title제목4?.innerHTML != undefined) {
    title제목4.innerHTML = '반가워요';
}
//============== 5번 =============
// tsconfig.json에서 stricNullChecks 끄기
//================================
//=============== 6번 =============
//html요소를 사용할땐 html 속성을 지정해야한다
let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
//=============== 7번 =============
let 링크2 = document.querySelector('#button');
//1. 제목에 innerHTML이 있으면 출력해주고
//2. 없으면 undefined 뱉는다
if (링크2 instanceof HTMLButtonElement) {
    //html요소를 사용할땐 html 속성을 지정해야한다
    링크2.addEventListener('click', () => { });
}
//(숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
const 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = 'new.jpg';
}
// (숙제2) 바꾸고 싶은 html 요소가 많습니다.
const 링크3 = document.querySelectorAll('.naver');
링크3.forEach(item => {
    if (item instanceof HTMLAnchorElement) {
        item.href = 'https://kakao.com';
    }
});

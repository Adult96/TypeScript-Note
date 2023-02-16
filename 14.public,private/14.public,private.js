class User {
    name;
    #familyname = 'kim';
    constructor(a) {
        this.#familyname;
        this.#familyname = 'park';
        this.name = a + this.#familyname;
    }
}
let 유저1 = new User('seongin');
console.log(유저1.name);
//public 키워드 사용하면 처음 this 생략 가능 class안에서 사용하려면 this.로 가져와야함
//✅ Person1은 프로토타입(틀,찍어내는 클래스)
class Person1 {
    name;
    constructor(name) {
        this.name = name;
    }
}
//✅ new Person1은 인스턴스(틀로 생성한 객체)
let 자식 = new Person1('kim');
console.log(자식);
//private는 extends공유 불가능 프로퍼티로 사용 불가능
//protected는 extends공유 가능 프로퍼티로 사용 불가능
//static는 extends공유 불가능 인스턴스가 프로퍼티가아닌 부모(프로토타입)에서 직접 사용 가능 부모 클래스에 직접 부여됨
// static은 private, protected, public 키워드와 동시 사용가능합니다.
class Person2 {
    z = 5;
    x = 10;
    y = 20;
    static a = 'park';
    intro = Person2.a + 'seongin'; //스태틱은 this가아닌 부모만 가져다 쓸수있다.
}
class Person3 extends Person2 {
    doThis() {
        this.y; //protected
    }
}
const newPerson = new Person3();
console.log(newPerson.intro);
Person2.a = 'kim';
const newPerson2 = new Person3();
console.log(newPerson2.intro);
//========= class 안에서 쓰는 static 키워드 ==================
class User1 {
    x = 10;
    y = 20;
}
let john = new User1();
john.x; //가능
//User.x //불가능
class User2 {
    static x = 10;
    y = 20;
}
let john2 = new User2();
//john2.x //불가능
User2.x; //가능
//숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
class User3 {
    static x = 10;
    static y = 20;
    z = 30;
}
//private static 은 extends에서 사용 불가능하고, 프로퍼티로 사용 불가능, 부모클래스 에서 프로퍼티로 사용할수 있다.
//public static은 기본 stactic과 동일 하다 extends에서 사용 불가능하고, 부모클래스 에서 프로퍼티로 사용할수 있다.
// protected는 private의 약한 버전이고 extends에서 사용 가능하고 인스턴스에서 프로퍼티로 사용 불가능 하다
//(숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
class User4 {
    static x = 10;
    static y = 20;
    static addOne(num) {
        User4.x += num;
    }
    static printX() {
        console.log(User4.x);
    }
}
User4.addOne(3); //이렇게 하면 x가 3 더해져야함
User4.addOne(4); //이렇게 하면 x가 4 더해져야함
User4.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
class Square2 {
    h;
    v;
    color;
    square2;
    constructor(h, v, color) {
        this.h = h;
        this.v = v;
        this.color = color;
        this.square2 = document.querySelector('#square2');
    }
    draw() {
        const randomPosX = Math.random() * (370 - 30) + 30;
        const randomPosY = Math.random() * (370 - 30) + 30;
        let div = document.createElement('div');
        div.style.cssText = `
          width: ${this.h}px;
          height: ${this.h}px;
          background-color: ${this.color};
          position: absolute;
          top: ${randomPosX}px;
          left: ${randomPosY}px;
    `;
        this.square2.appendChild(div);
    }
}
let 네모2 = new Square2(30, 30, 'red');
네모2.draw();
네모2.draw();
네모2.draw();
네모2.draw();

// 변수 생성 방법 1. const (상수) --> 새로운 값 대입하지 못한다.
// 변수 생성 방법 2. let --> 새로운 것을 만들고 싶고 후에 변경할 수 있게 하는 변수
// const, let은 과거에서부터 있던 것은 아님 --> 초기부터 있던 것은 var이다.
// 변수 생성 방법 3. var --> 언제나 업데이트 가능! 하지만, 바뀌지 않아야 하는 변수도 바뀔 수 있음
// boolean
// null은 false와 다르다! -->  null은 값이 존재하지만, 없다는 것이다!
// let somethig; --> undefined : 정의되어 있지 않음! 메모리 공간은 존재하는데, 값은 들어가 있지 않음
// Array in javascript --> 시작과 끝에는 대괄호([])가 있어야 하고, 각 항목들은 ,로 분리된다.
// .push() : Add one more item to tha array
// Object: console은 object이고 그 안 어딘가에 log가 있어 console.log를 사용할 수 있다.
// 우리가 직접 object 생성도 가능하다. object는 property를 가진 데이터를 저장한다.
// const player = {
//     name : "nico",
//     fat : true,
//     points : 10,
// };
// console.log(player);
// console.log(player["name"]);
// console.log(player.name);
// player.lastName = "potato"l --> object에 property 가진 값 추가하기!
// player.fat = false;  --> constant는 변경하지 못하지 않나요? 에러는 constant 전체를 하나의 값으로서 업데이트하려고 할 때 발생함. constant인 player이므로 player을 바꿀 때 발생한다.
// console.log(player);
// function(argument)
// const player = {
//     name: "nico",
//     sayHello: function(otherPersonsName){
//         console.log("Hello " + otherPersonsName + " nice to meet you");
//     }
// };
// console.log(player.name);
// player.sayHello("lynn");
// "15" --> 15: 문자를 숫자로 바꾸기 ---> paresInt() 함수 사용
// const agePerson = parseInt(prompt("How old are you?"));
// console.log(isNaN(agePerson));
// if(isNaN(agePerson) || agePerson < 0){       // agePerson = NaN
//     console.log("Please write a real positive number");
// } else if(agePerson < 18){
//     console.log("You are too young");
// } else if(agePerson >= 18 && agePerson <= 50){
//     console.log("You can drink");
// } else if(agePerson > 50 && agePerson <=80){
//     console.log("You should exercise");
// } else if(agePerson > 80){
//     console.log("You can do whatever you want");
// }
// js는 document를 이용해 HTML에 접근하고 읽을 수 있게 설정되어 있다. 또한, js로 HTML을 읽어와 값을 변경할 수도 있다.
// getElementById, getElementsByClassName --> array 형태로 반환, getElementsByClassName() --> array 형태로 반환, getElementsByName --> 
// querySelector(All)는 element를 CSS 방식으로 검색할 수 있다. --> CSS 선택자 사용함 --> 만약 여러 개 존재하면 querySelector은 오직 첫 번째 것만 가져오고, querySelectorAll은 배열로 가져온다.
// const h1 = document.querySelector('.hello h1');
// function handleTitleClick() {
    // const clickedTitleClass = "active";
    // h1.classList.toggle("active");
    /*
    if(h1.classList.contains(clickedTitleClass)){
        h1.classList.remove(clickedTitleClass);
    }else{
        h1.classList.add(clickedTitleClass);
    }
    */
// }
// event 처리하는 방법 1 : 함수명 대입
// event 처리하는 방법 2 : .addEventListener() 사용 --> 이 방법은 나중에 removeEventListener()을 사용해 제거할수도 있음
// h1.addEventListener("click", handleTitleClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 모든 EventListener function의 첫 번째 argument는 항상 막 벌어진 일들에 대한 정보가 된다. 그리고 event를 첫 번째 argument로 작성하는 것이 관행이다.
function onLoginSubmit(event){
    event.preventDefault();        // .preventDefault() 메서드 : 어떤 event의 기본 행동이 발생하지 않도록 막는다. --> 여기서는 브라우저가 form을 submit함으로써 새로고침되는 것을 막는다. 
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // 브라우저에 유저 이름을 기억하게 하기 --> localStorage의 .setItem, .getItem, .removeItem 메서드 이용!
    loginForm.classList.add(HIDDEN_CLASSNAME);      // hidden 클래스로 입력 form 숨기기
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;       // 변수를 string 안에 합치는 방법 1. + 이용 방법 2. ``(맥북 영어키 기준 : 1 왼쪽 키보드)이용하기 --> ${변수}: string 변수의 값을 넣어줌
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/*
function handleLinkClick(event){
    event.preventDefault();     // 링크 클릭 후 다른 페이지로 넘어가는 것 막기! --> defaultPrevented: true로 바뀜
    

}
*/

const savedUsername = localStorage.getItem(USERNAME_KEY);   // localStorage에 username 정보 있는지 가져오기 --> 없으면 null 반환, 있으면 유저 이름 반환함
if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    // show the greeting
    paintGreetings(savedUsername);
}
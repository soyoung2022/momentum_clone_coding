# 😸 momentum_clone_coding
[Clone Coding]Nomad Coders_바닐라 JS로 크롬 앱 만들기(강의) + css 사용해서 웹 화면 완성하기(셀프)

### ✨개요
설명: JS를 이용해 Chrome App 클론 코딩<br>
링크: https://nomadcoders.co/javascript-for-beginners<br>
기간: 2022.01.31~02.05 총 6일<br>
사용 언어: Html, CSS, JavaScript

#### 📍greetings.js
- 로그인을 하여 submit 이벤트가 발생하면 해당 userID를 localstorage에 저장해두었다.
- localstorage에 저장된 userID를 바탕으로 이후 사이트를 새로고침해도 다시 로그인하지 않아도 되게 했다.
- form의 기본적인 기능을 하지 않게 해주는 .preventDefault()를 사용해 폼 제출 시 브라우저가 자동 새로고침되지 않도록 했다.
- localstorage에 유저이름이 저장되어 있으면 form에 hidden 클래스를 추가하고 greeting message가 보이도록 했다.

#### 📍background.js
- 배경사진 3개를 가져와(Pixabay에서 상업적 용도로 사용 가능하며 출처 표기 하지 않아도 되는 사진을 가져왔다.) 배열에 저장하고 무작위로 1개의 사진이 뽑히도록 했다.
- 무작위로 뽑힌 사진을 배경화면으로 설정했다.
- html에 img 태그를 만들어놓지 않고 js에서 createElement()로 이미지 element를 생성한 후 .appendChild()로 생성한 element를 body에 추가했다.

#### 📍quotes.js
- 명언 10개를 가져와 배열에 저장하고, Math.random()을 이용해 10개의 배열에서 무작위로 1개의 명언이 뽑히게 했다.
- 무작위로 뽑힌 명언 1개를 화면 하단에 표시한다.

#### 📍clock.js
- Date() 객체를 생성하여 실시간 시간, 분, 초에 관한 정보를 받아왔다.
- setInterval(getClock, 1000) 메서드를 사용해 1초마다 getClock 함수가 수행되도록 했다.

#### 📍todo.js
- 새로고침해도 다시 리스트가 보이도록 localStorage를 사용했다.
- 사용자로부터 submit된 value를 string화하여 localstorage에 객체(id와 todo)배열로 저장해줬다.
- X 버튼을 누르면(click event) 리스트 삭제되도록 하는 기능을 구현했다.

#### 📍weather.js
- openweathermap API 사용해서 실시간 사용자의 위치, 온도 정보를 화면에 표현했다.

#### 👩🏻‍💻 Next Step & Goal
1. css는 강의에서 다루지 않아서 직접 해봤는데, 처음이라서 그런지 조금 어려웠지만 재밌었다!!<br>
👉🏻 특히, 브라우저 크기 조절을 하다가 마주치는 것들에 반응형 웹 개발을 해보고 싶어졌다. 이번에는 주로 vh를 활용했다.<br>
👉🏻 배경 위에 글자를 표현하려고 처음에는 opacity를 사용했는데, 구글링하다가 rgba를 사용하는 방법으로 바꿨다. + z-index도 사용했다.<br>
👉🏻 margin과 padding의 차이 : padding은 요소 안쪽, margin은 요소 바깥쪽 간격이라고 생각하기<br>
👉🏻 투두리스트를 많이 적으면 스크롤이 생겨서 스크롤이 생기지 못하게 overflow: hidden;을 작성했다.<br>
👉🏻 이 부분이 아쉬운데, 다음에 투두리스트를 만들거나 스크롤 생길 일이 있으면 스크롤이 생겨도 배경사진을 꽉 차게 하는 것을 해볼 것이다.<br>
2. 이번 학기의 최종적인 목표는 개인 홈페이지를 만드는 것인데, 그 전에는 세부적인 기능들을 메인으로 하여 토이 프로젝트를 해보는 것이 목표이다.<br>
👉🏻 제이쿼리 공부 중이니까 리액트도 이후에 공부해서 같이 사용해야지!<br>
👉🏻 css로 적용하는 것이 재밌다! 최근에 나온 css 기능도 유튜브에서 봤었는데, 기회가 된다면 적용해보고 싶다.<br>

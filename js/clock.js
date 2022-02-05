const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();        // Date 객체 이용하기 --> 이것을 호출하는 "당시의" 날짜, 시간을 알려줌 --> 따라서 시계 만들기 위해서는 setInterval 메서드 필요함
    // String() --> string으로 바꿀 때 사용함
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();     // getClock() 호출 안하면 새로고침하고 디폴트인 00:00이었다가 1초 후에 시간 바뀌기 때문에 호출 한 번 해주기!
// setInterval(수행하고자 하는 함수, 몇 초마다 실행할 건지) --> 이때 초는 ms 기준(5초 --> 5000)
// setTimeout(수행하고자 하는 함수, 수행 시작 전 얼마나 기다릴지! 즉, 몇 ms 후에 함수를 수행할지)
setInterval(getClock, 1000);

// padStart() : string에 사용할 수 있는 함수이다. "1".padStart(2, "0") --> 01로 만들어줌
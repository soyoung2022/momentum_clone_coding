# ๐ธ momentum_clone_coding
[Clone Coding]Nomad Coders_๋ฐ๋๋ผ JS๋ก ํฌ๋กฌ ์ฑ ๋ง๋ค๊ธฐ(๊ฐ์) + css ์ฌ์ฉํด์ ์น ํ๋ฉด ์์ฑํ๊ธฐ(์ํ)

### โจ๊ฐ์
์ค๋ช: JS๋ฅผ ์ด์ฉํด Chrome App ํด๋ก  ์ฝ๋ฉ<br>
๋งํฌ: https://nomadcoders.co/javascript-for-beginners<br>
๊ธฐ๊ฐ: 2022.01.31~02.05 ์ด 6์ผ<br>
์ฌ์ฉ ์ธ์ด: Html, CSS, JavaScript

#### ๐greetings.js
- ๋ก๊ทธ์ธ์ ํ์ฌ submit ์ด๋ฒคํธ๊ฐ ๋ฐ์ํ๋ฉด ํด๋น userID๋ฅผ localstorage์ ์ ์ฅํด๋์๋ค.
- localstorage์ ์ ์ฅ๋ userID๋ฅผ ๋ฐํ์ผ๋ก ์ดํ ์ฌ์ดํธ๋ฅผ ์๋ก๊ณ ์นจํด๋ ๋ค์ ๋ก๊ทธ์ธํ์ง ์์๋ ๋๊ฒ ํ๋ค.
- form์ ๊ธฐ๋ณธ์ ์ธ ๊ธฐ๋ฅ์ ํ์ง ์๊ฒ ํด์ฃผ๋ .preventDefault()๋ฅผ ์ฌ์ฉํด ํผ ์ ์ถ ์ ๋ธ๋ผ์ฐ์ ๊ฐ ์๋ ์๋ก๊ณ ์นจ๋์ง ์๋๋ก ํ๋ค.
- localstorage์ ์ ์ ์ด๋ฆ์ด ์ ์ฅ๋์ด ์์ผ๋ฉด form์ hidden ํด๋์ค๋ฅผ ์ถ๊ฐํ๊ณ  greeting message๊ฐ ๋ณด์ด๋๋ก ํ๋ค.

#### ๐background.js
- ๋ฐฐ๊ฒฝ์ฌ์ง 3๊ฐ๋ฅผ ๊ฐ์ ธ์(Pixabay์์ ์์์  ์ฉ๋๋ก ์ฌ์ฉ ๊ฐ๋ฅํ๋ฉฐ ์ถ์ฒ ํ๊ธฐ ํ์ง ์์๋ ๋๋ ์ฌ์ง์ ๊ฐ์ ธ์๋ค.) ๋ฐฐ์ด์ ์ ์ฅํ๊ณ  ๋ฌด์์๋ก 1๊ฐ์ ์ฌ์ง์ด ๋ฝํ๋๋ก ํ๋ค.
- ๋ฌด์์๋ก ๋ฝํ ์ฌ์ง์ ๋ฐฐ๊ฒฝํ๋ฉด์ผ๋ก ์ค์ ํ๋ค.
- html์ img ํ๊ทธ๋ฅผ ๋ง๋ค์ด๋์ง ์๊ณ  js์์ createElement()๋ก ์ด๋ฏธ์ง element๋ฅผ ์์ฑํ ํ .appendChild()๋ก ์์ฑํ element๋ฅผ body์ ์ถ๊ฐํ๋ค.

#### ๐quotes.js
- ๋ช์ธ 10๊ฐ๋ฅผ ๊ฐ์ ธ์ ๋ฐฐ์ด์ ์ ์ฅํ๊ณ , Math.random()์ ์ด์ฉํด 10๊ฐ์ ๋ฐฐ์ด์์ ๋ฌด์์๋ก 1๊ฐ์ ๋ช์ธ์ด ๋ฝํ๊ฒ ํ๋ค.
- ๋ฌด์์๋ก ๋ฝํ ๋ช์ธ 1๊ฐ๋ฅผ ํ๋ฉด ํ๋จ์ ํ์ํ๋ค.

#### ๐clock.js
- Date() ๊ฐ์ฒด๋ฅผ ์์ฑํ์ฌ ์ค์๊ฐ ์๊ฐ, ๋ถ, ์ด์ ๊ดํ ์ ๋ณด๋ฅผ ๋ฐ์์๋ค.
- setInterval(getClock, 1000) ๋ฉ์๋๋ฅผ ์ฌ์ฉํด 1์ด๋ง๋ค getClock ํจ์๊ฐ ์ํ๋๋๋ก ํ๋ค.

#### ๐todo.js
- ์๋ก๊ณ ์นจํด๋ ๋ค์ ๋ฆฌ์คํธ๊ฐ ๋ณด์ด๋๋ก localStorage๋ฅผ ์ฌ์ฉํ๋ค.
- ์ฌ์ฉ์๋ก๋ถํฐ submit๋ value๋ฅผ stringํํ์ฌ localstorage์ ๊ฐ์ฒด(id์ todo)๋ฐฐ์ด๋ก ์ ์ฅํด์คฌ๋ค.
- X ๋ฒํผ์ ๋๋ฅด๋ฉด(click event) ๋ฆฌ์คํธ ์ญ์ ๋๋๋ก ํ๋ ๊ธฐ๋ฅ์ ๊ตฌํํ๋ค.

#### ๐weather.js
- openweathermap API ์ฌ์ฉํด์ ์ค์๊ฐ ์ฌ์ฉ์์ ์์น, ์จ๋ ์ ๋ณด๋ฅผ ํ๋ฉด์ ํํํ๋ค.

#### ๐ฉ๐ปโ๐ป Next Step & Goal
1. css๋ ๊ฐ์์์ ๋ค๋ฃจ์ง ์์์ ์ง์  ํด๋ดค๋๋ฐ, ์ฒ์์ด๋ผ์ ๊ทธ๋ฐ์ง ์กฐ๊ธ ์ด๋ ค์ ์ง๋ง ์ฌ๋ฐ์๋ค!!<br>
๐๐ป ํนํ, ๋ธ๋ผ์ฐ์  ํฌ๊ธฐ ์กฐ์ ์ ํ๋ค๊ฐ ๋ง์ฃผ์น๋ ๊ฒ๋ค์ ๋ฐ์ํ ์น ๊ฐ๋ฐ์ ํด๋ณด๊ณ  ์ถ์ด์ก๋ค. ์ด๋ฒ์๋ ์ฃผ๋ก vh๋ฅผ ํ์ฉํ๋ค.<br>
๐๐ป ๋ฐฐ๊ฒฝ ์์ ๊ธ์๋ฅผ ํํํ๋ ค๊ณ  ์ฒ์์๋ opacity๋ฅผ ์ฌ์ฉํ๋๋ฐ, ๊ตฌ๊ธ๋งํ๋ค๊ฐ rgba๋ฅผ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ผ๋ก ๋ฐ๊ฟจ๋ค. + z-index๋ ์ฌ์ฉํ๋ค.<br>
๐๐ป margin๊ณผ padding์ ์ฐจ์ด : padding์ ์์ ์์ชฝ, margin์ ์์ ๋ฐ๊นฅ์ชฝ ๊ฐ๊ฒฉ์ด๋ผ๊ณ  ์๊ฐํ๊ธฐ<br>
๐๐ป ํฌ๋๋ฆฌ์คํธ๋ฅผ ๋ง์ด ์ ์ผ๋ฉด ์คํฌ๋กค์ด ์๊ฒจ์ ์คํฌ๋กค์ด ์๊ธฐ์ง ๋ชปํ๊ฒ overflow: hidden;์ ์์ฑํ๋ค.<br>
๐๐ป ์ด ๋ถ๋ถ์ด ์์ฌ์ด๋ฐ, ๋ค์์ ํฌ๋๋ฆฌ์คํธ๋ฅผ ๋ง๋ค๊ฑฐ๋ ์คํฌ๋กค ์๊ธธ ์ผ์ด ์์ผ๋ฉด ์คํฌ๋กค์ด ์๊ฒจ๋ ๋ฐฐ๊ฒฝ์ฌ์ง์ ๊ฝ ์ฐจ๊ฒ ํ๋ ๊ฒ์ ํด๋ณผ ๊ฒ์ด๋ค.<br>
2. ์ด๋ฒ ํ๊ธฐ์ ์ต์ข์ ์ธ ๋ชฉํ๋ ๊ฐ์ธ ํํ์ด์ง๋ฅผ ๋ง๋๋ ๊ฒ์ธ๋ฐ, ๊ทธ ์ ์๋ ์ธ๋ถ์ ์ธ ๊ธฐ๋ฅ๋ค์ ๋ฉ์ธ์ผ๋ก ํ์ฌ ํ ์ด ํ๋ก์ ํธ๋ฅผ ํด๋ณด๋ ๊ฒ์ด ๋ชฉํ์ด๋ค.<br>
๐๐ป ์ ์ด์ฟผ๋ฆฌ ๊ณต๋ถ ์ค์ด๋๊น ๋ฆฌ์กํธ๋ ์ดํ์ ๊ณต๋ถํด์ ๊ฐ์ด ์ฌ์ฉํด์ผ์ง!<br>
๐๐ป css๋ก ์ ์ฉํ๋ ๊ฒ์ด ์ฌ๋ฐ๋ค! ์ต๊ทผ์ ๋์จ css ๊ธฐ๋ฅ๋ ์ ํ๋ธ์์ ๋ดค์๋๋ฐ, ๊ธฐํ๊ฐ ๋๋ค๋ฉด ์ ์ฉํด๋ณด๊ณ  ์ถ๋ค.<br>

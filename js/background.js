const images = ["paris.jpg", "lake.jpg", "tree.jpg", "waves.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");      // .createElement() 자바스크립트에서 html element 생성하기
bgImage.src = `img/${chosenImage}`;
bgImage.id = "background";

// 생성한 element html body에 추가하기
document.body.appendChild(bgImage);
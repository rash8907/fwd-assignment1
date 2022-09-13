console.log("hello");

let button2 = document.getElementById("text");
button2.addEventListener("click", changeText);


function changeText() {
    console.log("hello");
    let text1 = document.getElementById("text1");
    text1.innerHTML = "Thank you for clicking me";
}

const box = document.getElementById('box');
box.addEventListener('mouseover', function handleMouseOver() {
    box.style.color = 'blue';
  });
  box.addEventListener('mouseout', function handleMouseOut() {
    box.style.color = 'black';
  });

  const h1 = document.getElementById("heading");
    h1.innerText = "Welcome to my Assignment 1";

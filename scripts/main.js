
let myHeading = document.querySelector("h1");

myHeading.textContent = 'Hello World';

let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox2.png'){
    myImage.setAttribute('src',"images/firefox-icon.png");
  }
  else{
    myImage.setAttribute('src',"images/firefox2.png");
  }
}

function setHeading(name){
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla 苦逼了' + name + '!';

}

function setUserName(){
  let myName = prompt('请输入你的名字');

  localStorage.setItem('name',myName);
  setHeading(myName);
}


let storedName = localStorage.getItem('name');
if(!storedName){
  setUserName();
}
else{
  setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;

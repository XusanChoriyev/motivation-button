"use strict";
//fetch api
//result.josn() bu kelayotgan malumotni object ga o'tkazib olish
//Selectors
const btn = document.querySelector("#btn"),
  motiv = document.querySelector("#motiv");

  //Eventlisteners
  btn.addEventListener("click", () =>{
    fetch("https://api.adviceslip.com/advice")
      .then((result) => result.json())
      .then((data) => (motiv.textContent = data.slip.advice));
      
  })


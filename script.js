
window.onload = sendApiRequest

async function sendApiRequest(){
  let response = await fetch(`https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple`);
  let data = await response.json() ;
  useApiData(data);
}

function useApiData(data){
  document.querySelector("#category").innerHTML = `Categorie : ${data.results[0].category}`;
  document.querySelector("#difficulty").innerHTML = `Déficulté : ${data.results[0].difficulty}`;
  document.querySelector("#question").innerHTML = `Question : ${data.results[0].question}`;
  document.querySelector("#answer1").innerHTML = data.results[0].correct_answer;
  document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answers[0];
  document.querySelector("#answer3").innerHTML = data.results[0].incorrect_answers[1];
  document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answers[2];
} 

function next(data){
  let i = 1 ;
  document.querySelector("#category").innerHTML = `Categorie : ${data.results[i].category}`;
  document.querySelector("#difficulty").innerHTML = `Déficulté : ${data.results[i].difficulty}`;
  document.querySelector("#question").innerHTML = `Question : ${data.results[i].question}`;
  document.querySelector("#answer1").innerHTML = data.results[i].correct_answer;
  document.querySelector("#answer2").innerHTML = data.results[i].incorrect_answers[0];
  document.querySelector("#answer3").innerHTML = data.results[i].incorrect_answers[1];
  document.querySelector("#answer4").innerHTML = data.results[i].incorrect_answers[2];
  i++;
}

let correctAnswer = document.querySelector("#answer1");
correctAnswer.addEventListener("click",()=>{
  alert("Bravo !! vous avez trouvé la bonne réponse");
  sendApiRequest();
})

let wrongAnswer1 = document.querySelector("#answer2");
wrongAnswer1.addEventListener("click",()=>{
  alert("Désolé !! c'est une mauvaise réponse");
})

let wrongAnswer2 = document.querySelector("#answer3");
wrongAnswer2.addEventListener("click",()=>{
  alert("Désolé !! c'est une mauvaise réponse");
})

let wrongAnswer3 = document.querySelector("#answer4");
wrongAnswer3.addEventListener("click",()=>{
  alert("Désolé !! c'est une mauvaise réponse");
})


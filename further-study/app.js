"use strict";
const URL="https://icanhazdadjoke.com/";
const NUMOFJOKES=10;

$(function(){
  function addTODOM(str){
    $(".jokes").append(`<div class="joke"> </div>`)
    $(".joke").last().append(`<div>${str}</div>`);
    let buttonUp="<button class='up'style='font-size:24px'><i class='fa fa-thumbs-up'></i></button>"
    let buttonDown="<button class='down'style='font-size:24px'><i class='fa fa-thumbs-down'></i></button>"
    $(".joke").last().append(buttonUp);
    $(".joke").last().append(buttonDown);
    $(".up").last().on("click",changeScores);
    console.log("added eventListners")
    $(".down").last().on("click",changeScores);
    $(".joke").last().append(`<span id="netscore" netscore=0>Net Score:0</span>`);
    $(".joke").last().append("<br>");
  }
  function changeScores(evt){
    let netScoreSpan= $(evt.target).parent().parent().children()[3];
    let netScore=Number(netScoreSpan.getAttribute("netscore"));
    console.log(netScore, "netscore=");
    if ($(evt.target).parent().attr("class")==="up"){
      netScore++;
    }
    if ($(evt.target).parent().attr("class")==="down"){
      netScore--;
    }
    netScoreSpan.setAttribute("netscore",netScore);
    netScoreSpan.innerText=`Net Score:${netScore}`;
  }

  async function getJokes(){
    for (let i=0; i <NUMOFJOKES; i++){
      let response= await axios.get(URL, {headers : {Accept : "text/plain"}});
      console.log("resonse=",response);
      addTODOM(response.data);
    }
  }
  getJokes();
})
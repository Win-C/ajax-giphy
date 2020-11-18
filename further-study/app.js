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
    $(".joke").last().append(`<span netscore=0>Net Score:0</span>`);
    $(".joke").last().append("<br>");
  }
  function changeScores(evt){
    let netScore= Number($(evt.target).closest("span").attr("netscore"));
    console.log(netScore, "netscore=");
    if (evt.target.class==="up"){
      netScore++;
      $(evt.target).closest("span").attr("netscore",netScore);
      $(evt.target).closest("span").text(`Net Score:${netScore}`);
    }
    if (evt.target.class==="down"){
      netScore--;
      $(evt.target).closest("span").attr("netscore",netScore);
      $(evt.target).closest("span").text(`Net Score:${netScore}`);
    }
  }

  async function getJokes(){
    for (let i=0; i <NUMOFJOKES; i++){
      let response= await axios.get(URL, {headers : {Accept : "text/plain"}});
      console.log("resonse=",response);
      addTODOM(response.data);
    }
  }
  getJokes();
  for (button of $(".up")){
    console.log(button);
    button.on("click",changeScores);
  }
  for (button of $(".down")){
    button.on("click",changeScores);
  }
})
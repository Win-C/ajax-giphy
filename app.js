"use strict";

const url = 'http://api.giphy.com/v1/gifs/search';
const api_key = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

$(function(){

function appendToDom(imageUrl){
  $(".gifs").append(`<img src=${imageUrl}>`);
}

async function getSearch(){
  // debugger;
  let searchWord = $("input").val();
  let response = await axios.get(url, {params: {q: searchWord, api_key}});
  console.log("getSearch resp=", response);
  appendToDom(response.data.data[0].images.original.url);
};

$("#submit").on("click", getSearch);

console.log("Let's get this party started!");

});
"use strict";

const URL = 'http://api.giphy.com/v1/gifs/search';
const API_KEY = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';

$(function () {
  /*append the image to the gifs div */
  function appendToDom(imageUrl) {
    $(".gifs").append(`<img src=${imageUrl}>`);
  }

  async function getSearch(evt) {
    evt.preventDefault();
    // debugger;
    let searchWord = $("input").val();
    let response = await axios.get(url, { params: { q: searchWord, api_key } });
    console.log("getSearch resp=", response);
    //random function 
    let randomDigit = Math.floor(Math.random() * (50));
    // make a variable 
    let gifUrl= response.data.data[randomDigit].images.original.url;
    appendToDom(gifUrl);
  };
  $("#gif_form").on("submit", getSearch);
  // remove all gifs
  $("#remove").on("click", function (evt) {
    $(".gifs").empty();
  })
  console.log("Let's get this party started!");

});
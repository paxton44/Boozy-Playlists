//Pseudo Code 

// //make function that grabs the API 
// Var=APIGrabber = function (){}

// //API pseudo code rough: Spotify uses genres to access all media inside its database. 

// //get the playlists
// //get the playlist items 
// //get the songs from the playlist individually ****figure out if we need to go further into folders or if playlist is enough

// //Pseudo code code structure 
// //make a var that grabs from spotify 
// Var APIFunction =(function()) {
// var userID =  ""
// var userSecret = ""
// }
// //

//it uses a token parameter from spotify 
// 



//it then fetches the spotify api
//then grabs what you want based on how far into the database you went(genre, playlist, album, song)
//then it returns the selected music in JSON for your app
//then it returns to the app how the user expects to see the playlist or song 
$(document).ready(function(){
//
//js link test 
console.log("hello");
//box is the container with all of the drink selections 
//make vars for each drink
//
// var e = $("#drink-dropdown").val();
// // var result = e.options[e.selectedIndex]
// console.log(e)


$('#drink-dropdown').change(function(e){
    var e = $("#drink-dropdown").val();
    // var result = e.options[e.selectedIndex]
    console.log(e)
    })

    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000')
  .then(function (e) {
    return e.json();
  })
})
.then(function (data) {
  console.log(data);
});
  // .then(function (data) {
  //   //looping over the fetch response and inserting the URL of your repos into a list
  //   for (var i = 0; i < data.length; i++) {
  //     var drinkData= document.createElement('#recipe');
    // trigger the next drink in the api (.change)
    // JSON parse


var mojito 
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000 
//
var screwDriver
//
var margarita
//
var dirtyMartini
//
var moscowMule
var whiskeySour
var pinaColada 
var ginTonic
var manhattan
var oldFashioned
var longIsland
var cosmopolitan 
//make dropdown menu act as on click event based on drink selection that also populates the picture div and populates the drink recipe div from the drink api.  
//dropdown selection -> display drink image -> display drink recipe from drink API -> grabs playlist from spotify api based on assigned drink selection -> displays functioning spotify playlist in div -> 
// dropdown selection ->
//display drink image ->
//display drink recipe from drink API ->
//grabs playlist from spotify api based on assigned drink selection ->
//displays functioning spotify playlist in div ->

// $("#drink-dropdown").on("click", function() {
    
// });




//return function 
// return {
//     getPlaylist(token,genreID)}
//     {
// retrun playlist (token,genreID)
//     }

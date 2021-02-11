//Pseudo Code
// Pexels Api key

// import { createClient } from 'pexels';

// const client = createClient('563492ad6f917000010000013e47a29a529b44bda742616d10c0dc51');
// console.log(client)




//Pseudo Code 


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
//
//js link test
// console.log("hello");
//box is the container with all of the drink selections
//make vars for each drink
//
// var e = $("#drink-dropdown").val();
// // var result = e.options[e.selectedIndex]
// console.log(e)

// var drinkVal = $("#drink-dropdown").val();
// var myLink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkVal}`
$(document).ready(function(){
   var confirm = ("yes")
  window.onload = function () {
    if (confirm) {
    document.getElementById('yes').onclick = function () {
        document.getElementById('modal').style.display = "none"
    }}
    else {
   
    
      
    

    }
  
  };
 
    var drinkVal;

  $("#drink-dropdown").on("change", function (e) {
    // drinkVal.stopImmediatePropagation();
    // return false;
    drinkVal = $("#drink-dropdown").val();

    var myLink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkVal}`;
    // var e = $("#drink-dropdown").val();
    // var result = e.options[e.selectedIndex]

    e.preventDefault();
    console.log(drinkVal);
    // mojito API
    fetch(myLink)
      .then(function (drinkVal) {
        return drinkVal.json();
      })
      .then(function (data) {
        console.log(data);
        drinkData(data);
      });
  });
  // // mojito API
  //   fetch(myLink)
  // .then(function (drinkVal) {
  //   return drinkVal.json();
  // })
  // .then(function (data) {
  // console.log(data);

  //   drinkData(data);
  // });

  function drinkData(data) {
    let drink = data.drinks[0];
    const drinkDiv = document.getElementById("drink-content");
    // strDrink
    const drinkName = drink.strDrink;
    console.log(drinkName);

    // empty out div 

    const heading = document.createElement("h1");
    heading.innerHTML = drinkName;
    drinkDiv.appendChild(heading);

    for (var i = 0; i < 15; i++) {
      // ingredients with drink measurements
      //
      const drinkIngredients = document.createElement("ul");
      drinkDiv.appendChild(drinkIngredients);
      const value = drink[`strIngredient${i}`] + ": " + drink[`strMeasure${i}`];
      // console.log(drink[`strIngredient${i}`] + ": " + drink[`strMeasure${i}`])
      // add drink name
      if (drink[`strIngredient${i}`] != null) {
        listItem = document.createElement("ul");
        listItem.innerHTML = value;
        $("ul").attr("id", i + 1);
        console.log("ahhhh");
        drinkIngredients.appendChild(listItem);
      }

      
    }

  
    const drinkIngredients = document.createElement("ul");
    drinkDiv.appendChild(drinkIngredients);
    const getIngredients = Object.keys(drink)
      .filter(function (ingredient) {
        return ingredient.indexOf("strIngredient") == 0;
      })
      // add measurements to this
      .reduce(function (ingredients, ingredient) {
        if (drink[ingredient] != null) {
          ingredients[ingredient] = drink[ingredient];
        }
        return ingredients;
      }, {});

    // for (let key in getIngredients) {
    //   let value = getIngredients[key];
    //   listItem = document.createElement("li");
    //   listItem.innerHTML = value;
    //   drinkIngredients.appendChild(listItem);
    // }

    // instructions
    const drinkInstructions = document.createElement('p');

    drinkDiv.appendChild(drinkInstructions);
    const getInstructions = drink.strInstructions

    drinkInstructions.append(getInstructions);
  }
});




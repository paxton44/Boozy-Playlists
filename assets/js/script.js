$("#drink-dropdown").on("click", function () {

})

$(document).ready(function () {
  var confirm = ('yes')


  window.onload = function () {
    if (confirm) {
      document.getElementById('yes').onclick = function () {
        document.getElementById('modal').style.display = 'none'
        console.log(onclick);
        //why is the on click null?

      }
    }
    //  else {
    // //redirect to modalNo.html




    //  }

  };

  //making no button function we might need to deploy the 2nd html page as its own entity so we have a live url to redirect to.
  document.getElementById('no').onclick = function () {
    location.href = "https://www.bbc.com/";
  };





  var drinkVal;

  $("#drink-dropdown").on("change", function (e) {
    // drinkVal.stopImmediatePropagation();
    // return false;
    $("ul").empty();
    $("h1").empty();
    $("p").empty();

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

  let drinkName;

  function drinkData(data) {
    let drink = data.drinks[0];
    const drinkDiv = document.getElementById("drink-content");



    // strDrink
    drinkName = drink.strDrink;
    console.log(drinkName);

    fetch("https://api.pexels.com/v1/search?query=" + drinkName, {
        headers: {
          Authorization: "563492ad6f9170000100000134e84897333d4b1f95f23ba765c754d6"
        }
      })
      .then(resp => {

        return resp.json()
      })
      .then(data => {
        console.log(data.photos)
      })
// pexels drinkPix api filtering 
      // fetch(requestUrl)
      // .then(function (response) {
      //   return response.json();
      // })
      // .then(function (data) {
      //   console.log(data)
        
      //   var pinaColada = data.id.requestUrl;
      //   var mojito
      //   var margarita 
      //   var dirtyMartini
      //   var screwDriver
      //   var whiskeySour 
       
   
   
   
   
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

        drinkIngredients.appendChild(listItem);
      }


    }


    // instructions
    const drinkInstructions = document.createElement('p');

    drinkDiv.appendChild(drinkInstructions);
    const getInstructions = drink.strInstructions

    drinkInstructions.append(getInstructions);
  }


});
$("#drink-dropdown").on("click", function () {

})

$(document).ready(function () {
  var confirm = ('yes')
  window.onload = function () {
    if (confirm) {
      document.getElementById('yes').onclick = function () {
        document.getElementById('modal').style.display = 'none'
        console.log(onclick);
      }
    }
  };
  //No Modal Redirect to age appropriate page. 
  document.getElementById('no').onclick = function () {
    location.assign(href = "modalNo.html")
  };

  //Cocktail API Fetch 
  var drinkVal;

  $("#drink-dropdown").on("change", function (e) {


    $("h1").empty();
    $("p").empty();
    $("#drink-image").empty();
    drinkVal = $("#drink-dropdown").val();

    var myLink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkVal}`;


    e.preventDefault();
    console.log(drinkVal);
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

    fetch("https://api.unsplash.com/search/photos?page=1&per_page=30&query=" + drinkName, {
        headers: {
          Authorization: "Client-ID V1jjhq2XEVk2M7V0aaCJ1hnJlqQBBoH913NDfbJrCfQ"
        }
      })
      .then(resp => {

        return resp.json()
      })
      .then(data => {
        console.log(data)
        var drinkimages = {

          "Moscow Mule": {
            img: data.results[0].urls.small
          },

          "Gin And Tonic": {
            img: data.results[16].urls.small
          },

          "Mojito": {
            img: data.results[3].urls.small
          },

          "Pina Colada": {
            img: data.results[2].urls.small
          },

          "Dirty Martini": {
            img: data.results[20].urls.small
          },

          "Screwdriver": {

            img: data.results[0].urls.small

          },

          "Whiskey Sour": {
            img: data.results[0].urls.small
          },

          "Manhattan": {
            img: data.results[0].urls.small
          },

          "Old Fashioned": {
            img: data.results[3].urls.small
          },

          "Long Island Iced Tea": {
            img: data.results[0].urls.small
          },

          "Margarita": {
            img: data.results[0].urls.small
          },

          "Cosmopolitan": {
            img: data.results[6].urls.small
          },

        }

        console.log(drinkName)
        console.log(drinkimages[drinkName])
        var imgEL = document.createElement('img');
        imgEL.setAttribute("src", drinkimages[drinkName].img)
        document.getElementById('drink-image').appendChild(imgEL);

        if (drinkName == "Long Island Iced Tea") {
          imgEL.src = "assets/images/LongIslandIcedTea.jpg";
        } else if (drinkName === "Screwdriver") {
          imgEL.src = "assets/images/ScrewDriver.jpg";
        } else if (drinkName === "Manhattan") {
          imgEL.src = "assets/images/ManhattanCocktail.jpg";
        } else if (drinkName === "Cosmopolitan") {
          imgEL.className = "img-size";
        }

      })

    const heading = document.createElement("h1");
    heading.innerHTML = drinkName;
    drinkDiv.appendChild(heading);

    for (var i = 0; i < 15; i++) {

      const drinkIngredients = document.createElement("p");
      drinkDiv.appendChild(drinkIngredients);
      const value = drink[`strIngredient${i}`] + ": " + drink[`strMeasure${i}`];

      if (drink[`strIngredient${i}`] != null) {
        listItem = document.createElement("p");
        listItem.innerHTML = value;
        $("p").attr("id", i + 1);
        listItem.className = "drink-p"
        drinkIngredients.appendChild(listItem);
      }


    }

    const drinkInstructions = document.createElement('p');
    drinkInstructions.className = "drink-p"



    drinkDiv.appendChild(drinkInstructions);
    const getInstructions = drink.strInstructions

    drinkInstructions.append(getInstructions);
  }
});
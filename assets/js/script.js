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
    if (drinkVal === "Long Island Iced Tea"){
      var img = document. createElement("img");
      img.src = "longIslandIcedTea";
      var src = document. getElementById('drink-image');
      src.appendChild(img);
    }

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

    fetch("https://api.unsplash.com/search/photos?page=1&per_page=30&query=" + drinkName + "&q=80&w=400&h=300", {
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
<<<<<<< HEAD
            img: data.results[3].urls.small 
          },
    
          "Pina Colada": {
            img: data.results[2].urls.small 
=======
            img: data.results[3].urls.small
          },
    
          "Pina Colada": {
            img: data.results[2].urls.small
>>>>>>> df98ffc4d877ec08dd243d3a866371dc8f1f5d83
          },
          //assets\images\Dirty Martini.jpg
          "Dirty Martini": {
            img: data.results[20].urls.small 
          },
          //assets\images\ScrewDriver.jpg
          "Screwdriver": {
<<<<<<< HEAD
            img: data.results[0].urls.small 
=======

            // img: Object.assign(new Image, {
            //   src: "assets/images/ScrewDriver.jpg"
            // })

            img: data.results[0].urls.small

>>>>>>> df98ffc4d877ec08dd243d3a866371dc8f1f5d83
          },
          //assets\images\WhiskeySour.jpg
          "Whiskey Sour": {
            img: data.results[0].urls.small 
          },
          //assets\images\ManhattanCocktail.jpg
          "Manhattan": {
            img: data.results[0].urls.small 
          },
          //assets\images\OldFashioned.jpg
          "Old Fashioned": {
            img: data.results[3].urls.small 
          },
          // assets\images\longIslandIcedTeaDrink.jpg
          "Long Island Iced Tea": {
            img: data.results[0].urls.small 
          },
    
          "Margarita": {
            img: data.results[0].urls.small 
          },
          //assets\images\cosmoDope.jpg

          // "Cosmopolitan": {
          //   img: data.photos[0].src.medium
          // }, 

          


          "Cosmopolitan": {
            img: data.results[6].urls.small 
          },

        }

        
      

        
        console.log(drinkName)
        console.log(drinkimages[drinkName])
        var imgEL = document.createElement('img');
        imgEL.setAttribute("src", drinkimages[drinkName].img)
        document.getElementById('drink-image').appendChild(imgEL);
<<<<<<< HEAD
       
       
     
    // empty out div 
=======
        

        if (drinkName == "Long Island Iced Tea"){
          imgEL.src = "assets/images/LongIslandIcedTea.jpg";
        } 
       
        else if (drinkName === "Screwdriver")
        {
          imgEL.src = "assets/images/ScrewDriver.jpg";
        }
        else if (drinkName === "Manhattan")
        {
          imgEL.src = "assets/images/ManhattanCocktail.jpg";
        }
        else if(drinkName === "Cosmopolitan"){
          imgEL.className="img-size";
        }
        // else if(drinkName === "")
        

        


      })

    
>>>>>>> df98ffc4d877ec08dd243d3a866371dc8f1f5d83

    const heading = document.createElement("h1");
    heading.innerHTML = drinkName;
    drinkDiv.appendChild(heading);

    for (var i = 0; i < 15; i++) {
      // ingredients with drink measurements
      //
      const drinkIngredients = document.createElement("p");
      drinkDiv.appendChild(drinkIngredients);
      const value = drink[`strIngredient${i}`] + ": " + drink[`strMeasure${i}`];
      // console.log(drink[`strIngredient${i}`] + ": " + drink[`strMeasure${i}`])
      // add drink name
      if (drink[`strIngredient${i}`] != null) {
        listItem = document.createElement("p");
        listItem.innerHTML = value;
        $("p").attr("id", i + 1);
        listItem.className = "drink-p"
        drinkIngredients.appendChild(listItem);
      }


    }



    // instructions
    const drinkInstructions = document.createElement('p');
    drinkInstructions.className = "drink-p"



    drinkDiv.appendChild(drinkInstructions);
    const getInstructions = drink.strInstructions

    drinkInstructions.append(getInstructions);
  }
});
<<<<<<< HEAD
=======


>>>>>>> df98ffc4d877ec08dd243d3a866371dc8f1f5d83

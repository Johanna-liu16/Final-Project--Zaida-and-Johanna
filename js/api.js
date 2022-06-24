// Copyright (c) 2022 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-6-JS/sw.js", {
    scope: "/ICS2O-Assignment-6-JS/",
  })
}

;("use strict")
/**
 * Get API info.
*/
function myButtonClicked() {
  const getInfo = async (URLAddress) => {
    try {
      const result = await fetch(URLAddress)
      const jsonData = await result.json()
      var capital = 0
      var country = 0
      var nativeName = 0
      var cont = 0
      var region = 0
      var money = 0 
      var symbol = 0
      var lang = 0
      var real = 0
      var pop = 0

      console.log(jsonData[0].flags.svg)
      document.getElementById("api-image").innerHTML =
        '<img src="' +
        jsonData[0].flags.svg +
        '" alt="Cat image" class="center" width="40%" ' + 
        ">"; 

      console.log(jsonData[0].capital)
      capital = jsonData[0].capital

      console.log(jsonData[0].name)
      country = jsonData[0].name

      console.log(jsonData[0].nativeName)
      nativeName = jsonData[0].nativeName

      console.log(jsonData[0].region)
      cont = jsonData[0].region

      console.log(jsonData[0].subregion)
      region = jsonData[0].subregion

      console.log(jsonData[0].currencies[0].name)
      money = jsonData[0].currencies[0].name

      console.log(jsonData[0].currencies[0].symbol)
      symbol = jsonData[0].currencies[0].symbol

      console.log(jsonData[0].languages[0].name)
      lang = jsonData[0].languages[0].name

      console.log(jsonData[0].languages[0].nativeName)
      real = jsonData[0].languages[0].nativeName

      console.log(jsonData[0].population)
      pop = jsonData[0].population

      document.getElementById("info").innerHTML =
        "Capital: " +
        capital +
        "  Country: " + 
        country + 
        " Native Name: " + 
        nativeName + 
        " Continent: " + 
        cont + 
        " Population: " + 
        pop + 
        "  Language: " + 
        lang + 
        " Native language name: " +
        real + 
        " Currency: " + 
        money + 
        " Currency symbol: " + 
        symbol

    } catch (err) {
      console.log(err)
    }
  }
  var city = document.getElementById("city").value.toLowerCase()
  getInfo("https://restcountries.com/v2/capital/" + city)
}

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
  /**
   * Get API info.
   */
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
        '" alt="Country Flag" class="center" width="10%" ' +
        ">"
      
      console.log(jsonData[0].capital)
@@ -74,24 +74,27 @@ function myButtonClicked() {
      pop = jsonData[0].population

      document.getElementById("info").innerHTML =
        "<ul><li>Capital: " +
        capital +
        "</li><li>  Country: " +
        country +
        "</li><li> Native Name: " +
        nativeName +
        "</li><li> Continent: " +
        cont +
        "</li><li> Subregion: " +
        region +
        "</li><li> Population: " +
        pop +
        "</li><li>  Language: " +
        lang +
        "</li><li> Native language name: " +
        real +
        "</li><li> Currency: " +
        money +
        "</li><li> Currency symbol: " +
        symbol +
        "</li></ul>"
    } catch (err) {
      console.log(err)
    }
  }
  var city = document.getElementById("city").value.toLowerCase()
  getInfo("https://restcountries.com/v2/capital/" + city)
}
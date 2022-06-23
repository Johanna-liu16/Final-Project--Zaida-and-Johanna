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
const getInfo = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    
    console.log(jsonData[0].flags.svg)
    document.getElementById("api-image").innerHTML = '<img src="' + jsonData[0].flags.svg + '" alt="Cat image" class="center" width="40%" ' + ">"; 

  } catch (err) {
    console.log(err);
  };
};
getInfo("https://restcountries.com/v2/capital/paris")

// Created by: Zaida Hammel & Johanna Liu
// Created on: June 2022
// This file contains the JS functions for api.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-03-JS/sw.js", {
    scope: "/ICS2O-Unit6-03-JS/",
  })
}

/**
 * Get API info.
 */
const getWord = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    const feeling = jsonData.url
    var word = document.getElementById("word").value

    console.log(jsonData[0])
    document.getElementById("answer").innerHTML = jsonData[0].url

  } catch (err) {
    console.log(err)
  }
}
getImage("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)

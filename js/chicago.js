// Copyright (c) 2022 Johanna Liu, Zaida Hammel All rights reserved
//
// Created by: Johanna Liu, Zaida Hammel
// Created on: June 2022
// This file contains the JS functions for chicago.html

/**
 * This function does the citation.
 */
function myButtonClicked() {
  var lastname = document.getElementById("chiLastname").value
  var firstname = document.getElementById("chiFirstname").value
  var title = document.getElementById("chiTitle").value
  var web = document.getElementById("web").value
  var pub = document.getElementById("chiPub").value
  var day = document.getElementById("pubDay").value
  var month = document.getElementById("pubMonth").value
  var year = document.getElementById("pubYear").value
  var url = document.getElementById("chiUrl").value

  // process
  document.getElementById("results").innerHTML =
    lastname +
    ", " +
    firstname +
    "." +
    '"' +
    title +
    '." ' +
    web +
    ". " +
    pub +
    ", " +
    month +
    " " +
    day +
    ", " +
    year +
    ". " +
    url
}

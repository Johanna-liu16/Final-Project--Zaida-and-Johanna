// Copyright (c) 2022 Johanna Liu, Zaida Hammel All rights reserved
//
// Created by: Johanna Liu, Zaida Hammel
// Created on: June 2022
// This file contains the JS functions for mla.html

/**
 * This function does the citation.
 */
function myButtonClicked() {
  var lastname = document.getElementById("chiLastname").value
  var firstname = document.getElementById("chiFirstname").value
  var title = document.getElementById("chiTitle").value
  var web = document.getElementById("web").value
  var pub = document.getElementById("chiPub").value
  var pubDay = document.getElementById("pubDay").value
  var pubMonth = document.getElementById("pubMonth").value
  var pubYear = document.getElementById("pubYear").value
  var day = document.getElementById("chiDay").value
  var month = document.getElementById("chiMonth").value
  var year = document.getElementById("chiYear").value
  var url = document.getElementById("chiUrl").value

  // process
  document.getElementById("result").innerHTML =
    lastname +
    ", " +
    firstname +
    "." +
    '"' +
    title +
    '"' +
    ". " +
    pub +
    ", " +
    day +
    " " +
    month +
    " " +
    year +
    ", " +
    url
}

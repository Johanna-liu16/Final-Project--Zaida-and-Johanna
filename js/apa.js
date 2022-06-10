// Copyright (c) 2022 Johanna Liu, Zaida Hammel All rights reserved
//
// Created by: Johanna Liu, Zaida Hammel
// Created on: June 2022
// This file contains the JS functions for apa.html

/**
 * This function does the citation.
 */
function myButtonClickedAPA() {
  var lastname = document.getElementById("apaLastname").value
  var initial = document.getElementById("apaInitial").value
  var title = document.getElementById("apaTitle").value
  var pub = document.getElementById("apaPublisher").value
  var day = document.getElementById("apaDay").value
  var month = document.getElementById("apaMonth").value
  var year = document.getElementById("apaYear").value
  var url = document.getElementById("apaUrl").value

  // process
  document.getElementById("results").innerHTML =
    lastname +
    ", " +
    initial +
    ". " +
    '(' +
    year +
    ", " +
    month +
    " " +
    day +
    " ). " +
    title +
    ". " +
    pub +
    ". " +
    url
}

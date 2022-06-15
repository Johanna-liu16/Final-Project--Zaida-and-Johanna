// Copyright (c) 2022 Johanna Liu, Zaida Hammel All rights reserved
//
// Created by: Johanna Liu, Zaida Hammel
// Created on: June 2022
// This file contains the JS functions for citation.html

/**
 * This function does the citation.
 */
function mlaButtonClicked() {
  var lastnameMla = document.getElementById("mlaLastname").value
  var firstnameMla = document.getElementById("mlaFirstname").value
  var titleMla = document.getElementById("mlaTitle").value
  var pubMla = document.getElementById("mlaPublisher").value
  var dayMla = document.getElementById("mlaDay").value
  var monthMla = document.getElementById("mlaMonth").value
  var yearMla = document.getElementById("mlaYear").value
  var urlMla = document.getElementById("mlaUrl").value

  // process
  document.getElementById("resultmla").innerHTML =
    lastnameMla +
    ", " +
    firstnameMla +
    "." +
    '"' +
    titleMla +
    '"' +
    ". " +
    pubMla +
    ", " +
    dayMla +
    " " +
    monthMla +
    " " +
    yearMla +
    ", " +
    urlMla
}

// Copyright (c) 2022 Johanna Liu, Zaida Hammel All rights reserved
//
// Created by: Johanna Liu, Zaida Hammel
// Created on: June 2022
// This file contains the JS functions for citation.html

/**
 * This function does the citation.
 */
function mlaButtonClicked() {
  var lastNameMla = document.getElementById("mlaLastname").value
  var firstNameMla = document.getElementById("mlaFirstname").value
  var titleMla = document.getElementById("mlaTitle").value
  var pubMla = document.getElementById("mlaPublisher").value
  var dayMla = document.getElementById("mlaDay").value
  var monthMla = document.getElementById("mlaMonth").value
  var yearMla = document.getElementById("mlaYear").value
  var urlMla = document.getElementById("mlaUrl").value

  // process
  document.getElementById("resultmla").innerHTML =
    lastNameMla +
    ", " +
    firstNameMla +
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

function chicagoButtonClicked() {
  var lastNameChi = document.getElementById("chiLastname").value
  var firstNameChi = document.getElementById("chiFirstname").value
  var titleChi = document.getElementById("chiTitle").value
  var webChi = document.getElementById("chiweb").value
  var pubChi = document.getElementById("chiPub").value
  var dayChi = document.getElementById("chiDay").value
  var monthChi = document.getElementById("chiMonth").value
  var yearChi = document.getElementById("chiYear").value
  var urlChi = document.getElementById("chiUrl").value

  // process
  document.getElementById("resultschicago").innerHTML =
    lastNameChi +
    ", " +
    firstNameChi +
    "." +
    '"' +
    titleChi +
    '." ' +
    webChi +
    ". " +
    pubChi +
    ", " +
    monthChi +
    " " +
    dayChi +
    ", " +
    yearChi +
    ". " +
    urlChi
}

function myButtonClickedAPA() {
  var lastname = document.getElementById("apaLastname").value
  var initial = document.getElementById("apaInitials").value
  var title = document.getElementById("apaTitle").value
  var pub = document.getElementById("apaPublisher").value
  var day = document.getElementById("apaDay").value
  var month = document.getElementById("apaMonth").value
  var year = document.getElementById("apaYear").value
  var url = document.getElementById("apaUrl").value

  // process
  document.getElementById("resultsApa").innerHTML =
    lastname +
    ", " +
    initial +
    ". " +
    "(" +
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

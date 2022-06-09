// Copyright (c) 2022 Johanna Liu, Zaida Hammel All rights reserved
//
// Created by: Johanna Liu, Zaida Hammel
// Created on: June 2022
// This file contains the JS functions for mla.html

/**
 * This function does the citation.
 */
function myButtonClicked() {
  var lastname = document.getElementById("mlaLastname").value
  var firstname = document.getElementById("mlaFirstname").value
  var title = document.getElementById("mlaTitle").value
  var pub = document.getElementById("mlaPublisher").value
  var day = document.getElementById("mlaDay").value
  var month = document.getElementById("mlaMonth").value
  var year = document.getElementById("mlaYear").value
  var url = document.getElementById("mlaUrl").value

  // process
  document.getElementById("result").innerHTML= 
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

// Copyright (c) 2022 Johanna Liu, Zaida Hammel All rights reserved
//
// Created by: Johanna Liu, Zaida Hammel
// Created on: June 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-03-JS/sw.js", {
    scope: "/ICS2O-Unit-6-03-JS/",
  })
}

;("use strict")

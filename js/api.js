// Created by: Zaida Hammel & Johanna Liu
// Created on: June 2022
// This file contains the JS functions for api.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-03-JS/sw.js", {
    scope: "/ICS2O-Unit6-03-JS/",
  });
}

/**
 * Get API info.
 */
const getWord = async (URLAddress)
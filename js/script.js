// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

// Define a function to check the user's guess
function checkGuess() {
  // Get the user's guess from the input field
  var userGuess = document.getElementById("userGuess").value;
  // Generate a random number between 1 and 6
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  // Check if the user's guess matches the random number
  if (userGuess == randomNumber) {
    // If the guess is correct, display a message indicating success
    document.getElementById("result").innerHTML = "You guessed correctly!";
  } else {
    // If the guess is incorrect, display a message indicating failure and the correct number
    document.getElementById("result").innerHTML = "Sorry, the number was " + randomNumber + ".";
  }
}

// The "return false;" statement in the onsubmit attribute of the form prevents the page from reloading
// and the result text from disappearing when the user clicks the "Check" button
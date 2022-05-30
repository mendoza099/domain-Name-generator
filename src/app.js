/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".es"];
var anyString = [];

function combinaciones(initial, middle, end, dom) {
  for (i = 0; i < initial.length; i++) {
    var param1 = initial[i];

    for (k = 0; k < middle.length; k++) {
      var param2 = middle[k];

      for (j = 0; j < end.length; j++) {
        var param3 = end[j];

        for (l = 0; l < domain.length; l++) {
          var param4 = dom[l];
          var total = anyString.push(param1 + param2 + param3 + param4);
        }
      }
    }
  }
  return anyString;
}
console.log(combinaciones(pronoun, adj, noun, domain));

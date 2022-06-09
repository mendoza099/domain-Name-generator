/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#generator").innerHTML = combinaciones();
};
function combinaciones() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".es"];

  let pronounindx = Math.floor(Math.random() * pronoun.length);
  let adjindx = Math.floor(Math.random() * adj.length);
  let nounindx = Math.floor(Math.random() * noun.length);
  let domainindx = Math.floor(Math.random() * domain.length);

  return (
    pronoun[pronounindx] +
    "" +
    adj[adjindx] +
    "" +
    noun[nounindx] +
    "" +
    domain[domainindx]
  );
}

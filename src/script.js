import renderFact from "./renderFact.js";

const btn = document.querySelector("#get-cat-fact");

btn.addEventListener("click", () => {
  let fact = "";
  const promise = fetch("https://catfact.ninja/fact");
  promise
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      const rasp = renderFact(jsonResponse.fact);
      console.log(rasp);
    });
});

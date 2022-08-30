import renderFact from "./renderFact";
const btn = document.querySelector("#get-cat-fact");
btn.addEventListener("click", () => {
  console.log("S-a apasat butonul.");
  fetch("https://catfact.ninja/fact")
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      console.log("In consola:", jsonResponse.fact);
      renderFact(jsonResponse.fact);
    });
});

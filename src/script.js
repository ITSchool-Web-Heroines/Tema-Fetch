import renderFact from "./renderFact";
const btn = document.querySelector("#get-cat-fact");
btn.addEventListener("click", () => {
  let fact = "";
  console.log("S-a apasat butonul.");
  const promise = fetch("https://catfact.ninja/fact");
  promise
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      console.log("In consola:", jsonResponse.fact);
      renderFact(jsonResponse.fact);
    });
});

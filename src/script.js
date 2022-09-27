import renderFact from "./renderFact";
const btn = document.querySelector("#get-cat-fact");
// btn.addEventListener("click", () => {
//   let fact = "https://catfact.ninja/fact";
//   console.log("S-a apasat butonul.");
//   fetch(fact)
//     .then(response => {
//       return response.json();
//     })
//     .then(jsonResponse => {
//       console.log("In consola:", jsonResponse.fact);
//       renderFact(jsonResponse.fact);
//     });
// });

btn.addEventListener("click", async () => {
  let fact = "https://catfact.ninja/fact";
  const response = await fetch(fact);
  const catFact = await response.json();
  renderFact(catFact.fact);
  return catFact.fact;
});

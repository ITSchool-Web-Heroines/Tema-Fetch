import renderFact from "./renderFact";

const btn = document.querySelector("#get-cat-fact");

btn.addEventListener("click", () => {
  let fact = "https://catfact.ninja/fact";
  /**
   * Folosește API-ul https://catfact.ninja/fact
   * pentru a afișa o informație interesantă pentru pisici
   */
  fetch(fact)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Folosește această funcție, căreia îi dai un string
      renderFact(data.fact);
    });
});

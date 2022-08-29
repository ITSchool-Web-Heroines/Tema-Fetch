import renderFact from "./renderFact"

const btn = document.querySelector("#cat-fact");

btn.addEventListener("click", () => {
    let fact = fetch("https://catfact.ninja/fact")

    promise.then((response) => {
        return response.json();
    }).then((jsonResponse) => {
        console.log("Response", jsonResponse.fact);
    });
    /**
     * Folosește API-ul https://catfact.ninja/fact
     * pentru a afișa o informație interesantă pentru pisici
     */


    // Folosește această funcție, căreia îi dai un string
    renderFact(fact);

})

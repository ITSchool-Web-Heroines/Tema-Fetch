import renderFact from "./renderFact"

const btn = document.querySelector("#get-cat-fact");

btn.addEventListener("click", () => {
    let fact = fetch("https://catfact.ninja/fact")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.fact);
            renderFact(data.fact);
    })
 })
    
            
    /**
     * Folosește API-ul https://catfact.ninja/fact
     * pentru a afișa o informație interesantă pentru pisici
     */


    // Folosește această funcție, căreia îi dai un string
    

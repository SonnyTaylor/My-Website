/**
 * Fetches a new cat fact from the API, stores it in local storage, and displays it on the webpage.
 * If the fetched fact has been shown before, it fetches another new fact.
 */
function fetchNewCatFact() {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
      const catFact = data.fact;
      const storedFacts = localStorage.getItem("catFacts");
      let storedFactsArray = [];

      if (storedFacts) {
        storedFactsArray = JSON.parse(storedFacts);
      }

      if (storedFactsArray.includes(catFact)) {
        // If the new fact has also been shown before, fetch another new one
        fetchNewCatFact();
      } else {
        // Store the new fact in local storage and display it
        storedFactsArray.push(catFact);
        localStorage.setItem("catFacts", JSON.stringify(storedFactsArray));
        document.getElementById("cat-fact").textContent = catFact;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("cat-fact").innerHTML =
        "Error: Failed to fetch cat fact";
    });
}

// Call the function to fetch a new cat fact
fetchNewCatFact();
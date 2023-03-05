function searchCountries() {
  const searchInput = document.getElementById("search").value.toLowerCase();

  fetch(`https://restcountries.com/v3.1/lang/${searchInput}`)
    .then((response) => response.json())
    .then((data) => {
      let countryarray = [];
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerText = "";

      data.forEach((countryObj) => {
        countryarray.push(countryObj.name.common);
      });
      countryarray.filter((country) => {
        if (country.length > 0) {
          const countryList = document.createElement("ul");
          const countryItem = document.createElement("li");
          countryItem.innerText = `${country}`;
          countryList.append(countryItem);
          resultsDiv.append(countryList);
        } else {
          resultsDiv.innerHTML = "No results found";
        }
      });
    })
    .catch((error) => console.error(error));
}

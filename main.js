const searchForm = document.querySelector("form");
const searchResult = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = "10fe4f4c";
const APP_key = "63dc0fc31c2807322b673a217773cfeb";
const baseUrl = "https://api.edamam.com/search";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  console.log(searchQuery);
});

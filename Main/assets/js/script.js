const form = document.querySelector("#search-form");
const searchEl = document.querySelector("#search-input");
const formatEl = document.querySelector("#format-input");

const redirect = './search-results.html'

const submitHandler = (e) => {
  e.preventDefault();

  const search = searchEl.value.trim();
  const format = formatEl.value;

  if (search !== "Search!" && search) {
    const url = redirect + "?format=" +format + "&q=" + search;
    location.href = url
  }
};

form.addEventListener("submit", submitHandler);

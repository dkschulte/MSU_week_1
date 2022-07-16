const baseURL = "https://www.loc.gov/";
const form = document.querySelector("#search-form");
const searchEl = document.querySelector("#search-input");
const formatEl = document.querySelector("#format-input");
const parameters = location.search;
const paramArr = parameters.split("&");
console.log(paramArr);
const formatArr = paramArr;
const format = formatArr[0].split("=")[1];
console.log(format);
const url = baseURL + format + "?" + paramArr[1] + "&fo=json";
console.log(url);

const submitHandler = (e) => {
  e.preventDefault();

  const search = searchEl.value.trim();
  const format = formatEl.value;
const redirect = "./search-results.html";
  if (search !== "Search!" && search) {
    const url = redirect + "?format=" + format + "&q=" + search;
    location.href = url;
  }
};

form.addEventListener("submit", submitHandler);

fetch(url).then((response) => {
  if (response.ok) {
    
    console.log(typeof response.body);
    //   console.log(response.results)
  }
  response.json().then((data) => {
    console.log(data.results, data);
    let results = data.results;
    let container = document.getElementById("result-content");
    let lastImgUrl = "";
    results.forEach((row, i) => {
      console.log(row);
      // title*, img_url(array)*, date*, subject(array)*, description*, id

      //create card
      let cardEl = document.createElement("div");
      cardEl.id = "card";
      cardEl.classList.add("p-3", "bg-secondary", "mb-3", "rounded");

      //create title and append
      let title = document.createElement("h1");
      title.textContent = row.title;
      cardEl.append(title);

      //create image element & add to card
      let imgEl = document.createElement("img");

      //store last full image_url
      lastImgUrl = !!row.image_url[0] ? row.image_url[0] : lastImgUrl;

      //set img src to last full image_url
      let imgURL = lastImgUrl;
      imgEl.src = (imgURL === 'https://www.loc.gov/static/images/original-format/group-of-images.svg' || !imgURL) ? 'https://pbs.twimg.com/media/E1VGfdXVkAAZMml.jpg' : imgURL
      imgEl.width = 250
      imgEl.height = 200
      cardEl.append(imgEl);

      //create date & append
      let date = document.createElement("p");
      let rowDate = row.date;
      date.textContent = `Date: ${rowDate}`;
      cardEl.append(date);

      //subject & append
      let subjectArr = row.subject;
      let subjects = "";
      if (!!subjectArr) {
        let max = subjectArr.length < 7 ? subjectArr.length : 7;
        console.log(max);
        for (let i = 0; i < max; i++) {
          subjects += subjectArr[i];
          console.log(i < max - 1);
          if (i < max - 1) subjects += ", ";
        }
      }
      let subjectEl = document.createElement("p");
      subjectEl.textContent = `Subjects: ${subjects}`;

      cardEl.append(subjectEl);

      //create desc & append

      let descriptionEl = document.createElement("p");
      let rowDescription = row.description;
      descriptionEl.textContent = `Description: ${rowDescription}`;

      cardEl.append(descriptionEl);

      let btnEl = document.createElement("button");
      btnEl.classList.add("btn", "btn-danger");
      btnEl.textContent = "Read More!";

      let anchor = document.createElement("a");
      anchor.href = row.id;

      anchor.append(btnEl);
      cardEl.append(anchor);

      container.append(cardEl);
    });
  });
});

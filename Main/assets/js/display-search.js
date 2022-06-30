const baseURL = "https://www.loc.gov/";

const parameters = location.search;
const paramArr = parameters.split("&");
console.log(paramArr);
const formatArr = paramArr;
const format = formatArr[0].split("=")[1];
console.log(format);
const url = baseURL + format + "?" + paramArr[1] + "&fo=json";
console.log(url);

fetch(url).then((response) => {
  if (response.ok) {
    console.log(typeof response.body);
    //   console.log(response.results)
  }
  response.json().then((data) => {
    console.log(data.results, data);
  });
});

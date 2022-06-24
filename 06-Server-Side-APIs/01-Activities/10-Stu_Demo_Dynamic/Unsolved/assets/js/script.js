var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var userName = document.createElement('h3');
        var usersTitle = document.createElement('p');
        userName.textContent = data[i].login;
        usersTitle.textContent = data[i].url;
        userContainer.append(userName);
        userContainer.append(usersTitle);
      }
      // TODO: Loop through the data and generate your HTML
    });
}
fetchButton.addEventListener('click', getApi);

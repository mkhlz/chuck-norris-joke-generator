document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const num = document.querySelector('input[type="number"]').value;
  const xhr = new XMLHttpRequest();

  if(num > 0 && num < 30) {
  xhr.open('GET', `http://api.icndb.com/jokes/random/${num}`, true);}
  else {
    alert("Please don't overload the API. Use a number less than 31!");
  }

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
        });        
      } else {
        output += '<li>Something went wrong...</li>'
      }

      document.querySelector('.jokes').innerHTML = output;
      // console.log(response);
    }
  }

  xhr.send();

  e.preventDefault();
}

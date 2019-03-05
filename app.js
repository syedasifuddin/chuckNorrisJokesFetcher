document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  // const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.chucknorris.io/jokes/random`, true);

  xhr.onload = function() {
    let output = "";
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      output = `<li>${response.value}</li>`;
    }
    document.querySelector(".jokes").innerHTML = output;
  };

  xhr.send();
  e.preventDefault();
}

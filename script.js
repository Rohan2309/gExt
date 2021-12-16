fetch("https://icanhazdadjoke.com/slack") //calling fetch api
  .then((data) => data.json()) //converting data into json format
  .then((jokeData) => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById("jokeElement"); //accessing p tag from popup.html

    jokeElement.innerHTML = jokeText; //setting inner html
  });

fetch('https://api.chucknorris.io/jokes/random')
 .then(response => {
     console.log("API: ", response.json);
 })
 
 .catch();

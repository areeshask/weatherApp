function weather(){
    let city = document.getElementById('city').value;
    let apiKey = "e05da9622c181285b68fa6006112770c";
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

    fetch(url)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        let temp = data.main.temp;
        let condition = data.weather[0].main;
        let name = data.name;

        document.getElementById("output").innerHTML =
        "<b>📍 City:</b> " + name + "<br>" +
        "<b>🌡️ Temperature:</b> " + temp + "°C<br>" +
        "<b>🌈 Weather:</b> " + condition;
    })
    .catch(function () {
        document.getElementById("output").innerHTML = "❌ City not found!";
        });
}


let btn = document.querySelector("#joke");
let jokeText = document.querySelector("#text");


// API config
const apiKey = "nHWaMfowEd1D5F55STUy7Q==d1Ql2Ol31bZWcBUM";

const options = {
  method: "GET",
  headers: { 
    'X-Api-Key': apiKey
  }
}

// City
let city = "Rajshahi";

// Api url
const apiURL = `https://api.api-ninjas.com/v1/weather?city=Rajshahi`;

// Get joke api data
async function getData() {
  try {

    jokeText.innerText = "Please wait a while. Updating...";

    //btn disabled
    btn.disabled = true;
    btn.textContent = "Loading...";
    btn.style.cursor = "none";

    let response = await fetch(apiURL, options);
    let data = await response.json();

    const {cloud_pct, temp, feels_like, humidity, min_temp, max_temp, wind_speed,wind_degrees,sunrise, sunset} = data;


    let sunRiseHours = Math.floor(sunrise / 3600000);
    let sunRiseMinutes = Math.floor((sunrise % 3600000) / 60000);
    
    jokeText.innerHTML = 
    `<h5> cloud_pct: ${cloud_pct} </h5>
    <h5> temp: ${temp} </h5>
    <h5>feels_like: ${feels_like} </h5>
    <h5>humidity: ${humidity} </h5>
    <h5>min_temp: ${min_temp} </h5>
    <h5>max_temp:${max_temp} </h5>
    <h5>wind_speed: ${wind_speed} </h5>
    <h5>wind_degrees: ${wind_degrees} </h5>
    <h5>sunrise: ${sunRiseHours}:${sunRiseMinutes} AM</h5>
    <h5>sunset: ${sunset} </h5>
    `;

    // btn enable
    btn.disabled = false;
    btn.textContent = "Today Weather Condition";
    btn.style.cursor = "pointer";

    console.log(data);

  } catch (error) {

    jokeText.innerText = "There is an error occured";
    jokeText.style.color = "yellow";
    console.log(error);
  }
}

btn.addEventListener("click", () => {
  getData();
})
